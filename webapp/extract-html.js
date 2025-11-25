import { readFileSync, writeFileSync } from 'fs';

const srcContent = readFileSync('./src/index.tsx', 'utf8');

// Extract HTML content between c.html(` and `)
const htmlMatch = srcContent.match(/c\.html\(`([\s\S]*?)`\s*\)/);

if (htmlMatch && htmlMatch[1]) {
  const html = htmlMatch[1].trim();
  writeFileSync('./dist/index.html', html, 'utf8');
  console.log('✓ index.html created successfully');
} else {
  console.error('✗ Failed to extract HTML');
  process.exit(1);
}
