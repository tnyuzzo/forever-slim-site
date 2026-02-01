/**
 * Utility per ottimizzazione immagini
 * Usato sia server-side che per generare attributi srcset/sizes
 */

export interface ImageConfig {
  basePath: string;
  name: string;
  sizes?: number[];
  formats?: ('webp' | 'avif')[];
}

export const DEFAULT_SIZES = [640, 1024, 1920];
export const DEFAULT_FORMATS: ('webp' | 'avif')[] = ['webp', 'avif'];

/**
 * Genera l'attributo srcSet per immagini responsive
 */
export function generateSrcSet(
  basePath: string,
  name: string,
  format: 'webp' | 'avif' = 'webp',
  sizes: number[] = DEFAULT_SIZES
): string {
  return sizes
    .map(size => `${basePath}/${name}-${size}.${format} ${size}w`)
    .join(', ');
}

/**
 * Genera l'attributo sizes per immagini responsive
 * @param config - Configurazione breakpoint
 */
export function generateSizes(config?: {
  mobile?: string;
  tablet?: string;
  desktop?: string;
}): string {
  const {
    mobile = '100vw',
    tablet = '50vw',
    desktop = '33vw'
  } = config || {};

  return `(max-width: 640px) ${mobile}, (max-width: 1024px) ${tablet}, ${desktop}`;
}

/**
 * Helper per ottenere il path dell'immagine più appropriata
 */
export function getImagePath(
  basePath: string,
  name: string,
  size: number = 1024,
  format: 'webp' | 'avif' = 'webp'
): string {
  return `${basePath}/${name}-${size}.${format}`;
}

/**
 * Configurazione breakpoint comuni
 */
export const BREAKPOINT_CONFIGS = {
  // Full width hero
  hero: {
    mobile: '100vw',
    tablet: '100vw',
    desktop: '100vw'
  },
  // Card in grid
  card: {
    mobile: '100vw',
    tablet: '50vw',
    desktop: '33vw'
  },
  // Sidebar image
  sidebar: {
    mobile: '100vw',
    tablet: '40vw',
    desktop: '25vw'
  },
  // Thumbnail
  thumbnail: {
    mobile: '50vw',
    tablet: '25vw',
    desktop: '10vw'
  }
};

/**
 * Type guard per verificare se un file è un'immagine supportata
 */
export function isImageFile(filename: string): boolean {
  return /\.(png|jpg|jpeg|webp|avif)$/i.test(filename);
}

/**
 * Estrae il nome base da un filename con dimensione
 * Esempio: "hero-1024.webp" -> "hero"
 */
export function extractBaseName(filename: string): string {
  return filename.replace(/-\d+\.(webp|avif|png|jpg|jpeg)$/i, '');
}
