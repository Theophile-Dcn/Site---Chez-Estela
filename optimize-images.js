const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const pictureDir = './picture';

// Images to convert to WebP (all heavy JPG and PNG files)
const imagesToConvert = [
  'poster.png',
  'Tomates_Marmande.jpg',
  'Exploitation_Ciel.jpg',
  'Choux.png',
  'Pasteque1.jpg',
  'Susana.jpg',
  'Courges.jpg',
  'radisEstela1 - Copie.jpg',
  'Butternut_Potimarron.jpg',
  'Concours_Pastèque-2.jpg',
  'Melon_Jaune_Vert_HD.jpg',
  'Golden-3.jpg',
  'Estela.jpg',
  'Jules.jpg',
  'José.jpg'
];

async function convertToWebP(filename) {
  const inputPath = path.join(pictureDir, filename);
  const outputFilename = filename.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  const outputPath = path.join(pictureDir, outputFilename);
  
  if (!fs.existsSync(inputPath)) {
    console.log(`Skip: ${filename} not found`);
    return;
  }
  
  const inputStats = fs.statSync(inputPath);
  const inputSizeKB = Math.round(inputStats.size / 1024);
  
  try {
    await sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath);
    
    const outputStats = fs.statSync(outputPath);
    const outputSizeKB = Math.round(outputStats.size / 1024);
    const savings = Math.round((1 - outputStats.size / inputStats.size) * 100);
    
    console.log(`✓ ${filename} (${inputSizeKB} KB) -> ${outputFilename} (${outputSizeKB} KB) - ${savings}% saved`);
  } catch (err) {
    console.error(`✗ Error converting ${filename}:`, err.message);
  }
}

async function main() {
  console.log('Starting image optimization...\n');
  
  for (const image of imagesToConvert) {
    await convertToWebP(image);
  }
  
  console.log('\nDone!');
}

main();
