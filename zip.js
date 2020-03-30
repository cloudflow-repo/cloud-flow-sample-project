const compressing = require('compressing');
const fs = require('fs');

(async function main() {
  const paths = fs.readdirSync('./dist');
  const zipStream = new compressing.zip.Stream();

  for (const file of paths) {
    zipStream.addEntry(`./dist/${file}`);
  }

  const destStream = fs.createWriteStream('./dist.zip');
  zipStream.pipe(destStream);

  console.log('成功创建压缩归档：dist.zip');
})();