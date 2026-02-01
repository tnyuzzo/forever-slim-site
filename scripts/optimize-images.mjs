#!/usr/bin/env node
/**
 * Script per ottimizzare immagini in WebP e AVIF
 * Crea versioni responsive: 640px, 1024px, 1920px
 *
 * Uso: node scripts/optimize-images.mjs [cartella]
 * Esempio: node scripts/optimize-images.mjs products
 */

import sharp from 'sharp';
import { readdir, mkdir, stat } from 'fs/promises';
import { join, basename, extname } from 'path';
import { existsSync } from 'fs';

// Configurazione
const CONFIG = {
  sizes: [640, 1024, 1920],
  formats: ['webp', 'avif'],
  quality: {
    webp: 82,
    avif: 65
  },
  inputDir: './public/images',
  outputDir: './public/images'
};

// Colori per console
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  red: '\x1b[31m'
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

async function optimizeImage(inputPath, outputDir, baseName) {
  const results = [];

  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    log(`\n  Processing: ${baseName}`, 'blue');
    log(`  Original: ${metadata.width}x${metadata.height}`, 'reset');

    for (const size of CONFIG.sizes) {
      // Skip se l'immagine originale è più piccola
      if (metadata.width < size) {
        log(`  Skipping ${size}px (original is smaller)`, 'yellow');
        continue;
      }

      for (const format of CONFIG.formats) {
        const outputName = `${baseName}-${size}.${format}`;
        const outputPath = join(outputDir, outputName);

        await sharp(inputPath)
          .resize(size, null, {
            withoutEnlargement: true,
            fit: 'inside'
          })
          [format]({ quality: CONFIG.quality[format] })
          .toFile(outputPath);

        const outputStat = await stat(outputPath);
        const sizeMB = (outputStat.size / 1024 / 1024).toFixed(2);

        results.push({
          file: outputName,
          size: outputStat.size,
          sizeMB
        });

        log(`  ✓ ${outputName} (${sizeMB}MB)`, 'green');
      }
    }

    return results;
  } catch (error) {
    log(`  ✗ Error: ${error.message}`, 'red');
    return [];
  }
}

async function processDirectory(dirName) {
  const inputDir = join(CONFIG.inputDir, dirName);
  const outputDir = join(CONFIG.outputDir, dirName);

  if (!existsSync(inputDir)) {
    log(`Directory not found: ${inputDir}`, 'red');
    return;
  }

  // Crea output directory se non esiste
  if (!existsSync(outputDir)) {
    await mkdir(outputDir, { recursive: true });
  }

  log(`\n========================================`, 'blue');
  log(`Processing: ${dirName}`, 'blue');
  log(`========================================`, 'blue');

  const files = await readdir(inputDir);
  const imageFiles = files.filter(f =>
    /\.(png|jpg|jpeg)$/i.test(f) &&
    !/-\d+\.(webp|avif)$/.test(f) // Escludi file già ottimizzati
  );

  if (imageFiles.length === 0) {
    log(`No images to process in ${dirName}`, 'yellow');
    return;
  }

  log(`Found ${imageFiles.length} images to optimize`, 'reset');

  let totalSaved = 0;

  for (const file of imageFiles) {
    const inputPath = join(inputDir, file);
    const baseName = basename(file, extname(file));

    const inputStat = await stat(inputPath);
    const results = await optimizeImage(inputPath, outputDir, baseName);

    // Calcola risparmio
    const originalSize = inputStat.size;
    const optimizedTotal = results.reduce((sum, r) => sum + r.size, 0);
    totalSaved += originalSize - (optimizedTotal / results.length);
  }

  log(`\n✓ Directory ${dirName} completed!`, 'green');
}

async function main() {
  const args = process.argv.slice(2);

  log('\n🖼️  Forever Slim - Image Optimizer', 'blue');
  log('=====================================\n', 'blue');

  if (args.length > 0) {
    // Processa solo le directory specificate
    for (const dir of args) {
      await processDirectory(dir);
    }
  } else {
    // Processa tutte le directory di immagini
    const directories = ['hero', 'products', 'testimonials', 'science'];

    for (const dir of directories) {
      if (existsSync(join(CONFIG.inputDir, dir))) {
        await processDirectory(dir);
      }
    }
  }

  log('\n✅ Optimization complete!', 'green');
  log('\nNext steps:', 'reset');
  log('1. Use <OptimizedImage> component in your pages', 'reset');
  log('2. Deploy to Vercel for automatic optimization', 'reset');
}

main().catch(console.error);
