// Script to generate Open Graph image from SVG
// Run this script to convert the SVG to JPG for social media sharing

const fs = require('fs');
const path = require('path');

console.log('🚀 Open Graph Image Generator');
console.log('=============================');
console.log('');
console.log('To generate your Open Graph image:');
console.log('');
console.log('1. Convert the SVG to JPG/PNG:');
console.log('   - Use online tools like: https://convertio.co/svg-jpg/');
console.log('   - Or use design tools like Figma, Sketch, or Adobe Illustrator');
console.log('   - Save as "og-image.jpg" in the public folder');
console.log('');
console.log('2. Image requirements:');
console.log('   - Size: 1200x630 pixels (1.91:1 aspect ratio)');
console.log('   - Format: JPG or PNG');
console.log('   - File size: Under 1MB');
console.log('');
console.log('3. Upload to your hosting:');
console.log('   - Place the image at: https://impravesh.vercel.app/og-image.jpg');
console.log('');
console.log('4. Clear social media cache:');
console.log('   - Facebook: https://developers.facebook.com/tools/debug/');
console.log('   - Twitter: https://cards-dev.twitter.com/validator');
console.log('   - LinkedIn: https://www.linkedin.com/post-inspector/');
console.log('');
console.log('5. Test your changes:');
console.log('   - Share your URL on social media');
console.log('   - Wait 24-48 hours for cache to clear');
console.log('');
console.log('✅ Your Open Graph meta tags are already configured in index.html');
console.log('📱 The image will appear when sharing on Facebook, Twitter, LinkedIn, WhatsApp, etc.');
