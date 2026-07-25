const fs = require('fs');
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
pkg.scripts.build = 'rm -rf dist && cp -r public dist';
pkg.scripts.start = 'node server.js';
pkg.scripts.dev = 'node server.js';
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));
