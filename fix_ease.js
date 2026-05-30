const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.tsx')) results.push(file);
    }
  });
  return results;
}

const files = walk('./src/components');
files.forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  let changed = false;
  
  const newC = c
    .replace(/ease:\s*'([^']+)'(?! as const)/g, "ease: '$1' as const")
    .replace(/ease:\s*\[([\d.,\s]+)\](?! as const)/g, "ease: [$1] as const");
    
  if (c !== newC) {
    fs.writeFileSync(f, newC);
    console.log(`Updated ${f}`);
  }
});
