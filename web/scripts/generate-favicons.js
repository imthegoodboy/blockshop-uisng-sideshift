const sharp = require('sharp');
const path = require('path');
const fs = require('fs').promises;

const SOURCE_IMAGE = path.join(__dirname, '..', 'public', 'image.png');
const OUTPUT_DIR = path.join(__dirname, '..', 'public');

const FAVICON_SIZES = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 48, name: 'favicon.ico' },
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 192, name: 'android-chrome-192x192.png' },
  { size: 512, name: 'android-chrome-512x512.png' }
];

async function generateFavicons() {
  try {
    const sourceImage = await sharp(SOURCE_IMAGE);
    const metadata = await sourceImage.metadata();

    // Ensure output directory exists
    await fs.mkdir(OUTPUT_DIR, { recursive: true });

    // Generate favicons for each size
    const promises = FAVICON_SIZES.map(async ({ size, name }) => {
      const outputPath = path.join(OUTPUT_DIR, name);
      const format = name.endsWith('.ico') ? 'ico' : 'png';
      
      const resizedImage = sourceImage
        .clone()
        .resize(size, size, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 }
        });

      if (format === 'ico') {
        // For ICO, we need to save as PNG first
        const tempPngPath = path.join(OUTPUT_DIR, `temp-${size}.png`);
        await resizedImage
          .png()
          .toFile(tempPngPath);
        
        // Use the png file to create an ico
        const pngData = await sharp(tempPngPath)
          .toBuffer();
        
        // Write the buffer directly as ICO
        await fs.writeFile(outputPath, pngData);
        
        // Clean up temp file
        await fs.unlink(tempPngPath);
      } else {
        await resizedImage
          .png()
          .toFile(outputPath);
      }

      console.log(`Generated ${name}`);
    });

    await Promise.all(promises);

    // Generate site.webmanifest
    const manifest = {
      name: 'BlokShop',
      short_name: 'BlokShop',
      icons: [
        {
          src: '/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ],
      theme_color: '#ffffff',
      background_color: '#ffffff',
      display: 'standalone'
    };

    await fs.writeFile(
      path.join(OUTPUT_DIR, 'site.webmanifest'),
      JSON.stringify(manifest, null, 2),
      'utf-8'
    );

    console.log('Successfully generated all favicon assets');
  } catch (error) {
    console.error('Error generating favicons:', error);
    process.exit(1);
  }
}

generateFavicons();