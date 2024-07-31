const fs = require('fs');
const path = require('path');

function gfs(dir, excludeDirs = [], indent = '') {
    let structure = ''
    const files = fs.readdirSync(dir);
    files.forEach(function (file) {
        const filePath = path.join(dir, file);
        const stats = fs.statSync(filePath);
        if (stats.isDirectory()) {
            if (!excludeDirs.includes(file)) {
                structure += `${indent}|__${file}\n`;
                structure += gfs(filePath, excludeDirs, indent + '|  ');
            }
        } else {
            structure += `${indent}|- ${file}\n`;
        }
    })
    return structure;
}

const rootDir = path.resolve(__dirname);
console.log("generating structure...");

const excludeDirs = ['node_modules', 'build', '.git'];
console.log("🚀 ~ excludeDirs:", excludeDirs)

const folderStructure = gfs(rootDir, excludeDirs);
const fSContent = `# Project Folder Structure\n\n\'\'\'\n${folderStructure}\n\'\'\'\n`;

fs.writeFileSync('folderStructure.md', fSContent)
console.log("folder structure saved to folderStructure.md.");