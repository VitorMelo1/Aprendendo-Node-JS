const path = require('path');

// BaseName
console.log(path.basename(__filename));
// nome do diretorio
console.log(path.dirname(__filename));
// Extencao de arquivo
console.log(path.extname(__filename));
// Criar um objeto path
console.log(path.parse(__filename));

// juntar caminhos de arquivos
console.log(path.join(__dirname, 'test', 'test.html'));