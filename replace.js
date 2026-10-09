const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.css')) {
            results.push(file);
        }
    });
    return results;
}

const files = walk('./src');
let totalModified = 0;
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    
    let newContent = content;
    
    // Emails
    let tempEmail1 = 'contactus@devbhoomipaint.co.in';
    let tempEmail2 = 'contactus@devbhoomipaint.co.in';
    let tempTwitter = '@DevBhoomiPaint';
    
    // Placeholder emails
    newContent = newContent.split(tempEmail1).join('___EMAIL1___');
    newContent = newContent.split(tempEmail2).join('___EMAIL2___');
    newContent = newContent.split(tempTwitter).join('___TWITTER___');
    
    // Main replacements
    newContent = newContent.replace(/DevBhoomi Paints Industries/gi, 'Dev Bhoomi Paint Industries');
    newContent = newContent.replace(/Dev Bhoomi Paints Industries/gi, 'Dev Bhoomi Paint Industries');
    
    newContent = newContent.replace(/DevBhoomi Paints/gi, 'Dev Bhoomi Paint');
    newContent = newContent.replace(/Dev Bhoomi Paints/gi, 'Dev Bhoomi Paint');

    // Restore emails
    newContent = newContent.split('___EMAIL1___').join(tempEmail1);
    newContent = newContent.split('___EMAIL2___').join(tempEmail2);
    newContent = newContent.split('___TWITTER___').join(tempTwitter);

    if (newContent !== content) {
        console.log('Modified: ' + file);
        fs.writeFileSync(file, newContent, 'utf8');
        totalModified++;
    }
});
console.log('Total files modified: ' + totalModified);
