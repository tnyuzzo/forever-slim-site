'use client';

import Image from 'next/image';
import {
  generateSrcSet,
  generateSizes,
  DEFAULT_SIZES,
  BREAKPOINT_CONFIGS
} from '@/lib/image-optimizer';

interface OptimizedImageProps {
  basePath: string;
  name: string;
  alt: string;
  width?: number;
  height?: number;
  sizes?: number[];
  priority?: boolean;
  className?: string;
  fill?: boolean;
  breakpointConfig?: 'hero' | 'card' | 'sidebar' | 'thumbnail';
  objectFit?: 'cover' | 'contain' | 'fill';
}

/**
 * Componente per immagini ottimizzate con supporto WebP/AVIF
 * Genera automaticamente srcset per immagini responsive
 */
export default function OptimizedImage({
  basePath,
  name,
  alt,
  width,
  height,
  sizes = DEFAULT_SIZES,
  priority = false,
  className = '',
  fill = false,
  breakpointConfig = 'card',
  objectFit = 'cover'
}: OptimizedImageProps) {
  // Usa la configurazione di breakpoint predefinita o custom
  const sizesAttr = generateSizes(BREAKPOINT_CONFIGS[breakpointConfig]);

  // Fallback all'immagine più grande in WebP
  const fallbackSrc = `${basePath}/${name}-${Math.max(...sizes)}.webp`;

  // Controlla se esistono versioni ottimizzate (con -size nel nome)
  // Se no, usa l'immagine originale
  const srcWebP = generateSrcSet(basePath, name, 'webp', sizes);
  const srcAvif = generateSrcSet(basePath, name, 'avif', sizes);

  if (fill) {
    return (
      <picture>
        <source srcSet={srcAvif} type="image/avif" sizes={sizesAttr} />
        <source srcSet={srcWebP} type="image/webp" sizes={sizesAttr} />
        <Image
          src={fallbackSrc}
          alt={alt}
          fill
          priority={priority}
          className={className}
          style={{ objectFit }}
          sizes={sizesAttr}
        />
      </picture>
    );
  }

  return (
    <picture>
      <source srcSet={srcAvif} type="image/avif" sizes={sizesAttr} />
      <source srcSet={srcWebP} type="image/webp" sizes={sizesAttr} />
      <Image
        src={fallbackSrc}
        alt={alt}
        width={width || sizes[sizes.length - 1]}
        height={height || Math.round((width || sizes[sizes.length - 1]) * 0.75)}
        priority={priority}
        className={className}
        sizes={sizesAttr}
      />
    </picture>
  );
}

/**
 * Componente specializzato per hero images full-width
 */
export function HeroImage({
  basePath,
  name,
  alt,
  priority = true,
  className = ''
}: Omit<OptimizedImageProps, 'breakpointConfig' | 'fill'>) {
  return (
    <OptimizedImage
      basePath={basePath}
      name={name}
      alt={alt}
      fill
      priority={priority}
      className={className}
      breakpointConfig="hero"
      objectFit="cover"
    />
  );
}

/**
 * Componente specializzato per immagini prodotto in card
 */
export function ProductImage({
  basePath,
  name,
  alt,
  className = ''
}: Omit<OptimizedImageProps, 'breakpointConfig' | 'priority'>) {
  return (
    <OptimizedImage
      basePath={basePath}
      name={name}
      alt={alt}
      fill
      className={className}
      breakpointConfig="card"
      objectFit="cover"
    />
  );
}

/**
 * Componente per avatar/testimonial (immagini piccole)
 */
export function AvatarImage({
  basePath,
  name,
  alt,
  size = 56,
  className = ''
}: {
  basePath: string;
  name: string;
  alt: string;
  size?: number;
  className?: string;
}) {
  return (
    <Image
      src={`${basePath}/${name}.png`}
      alt={alt}
      width={size}
      height={size}
      className={`rounded-full object-cover ${className}`}
    />
  );
}
