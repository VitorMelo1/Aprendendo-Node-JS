const { error } = require("console");
const fs = require("fs");
const path = require("path");
// Criar uma pasta

// fs.mkdir(path.join(__dirname, '/test'), (error) =>{
//     if(error){
//         return console.log('Erro ', error);
//     }
//     console.log('Pasta criada com sucesso')
// });

// Criar um arquivo
fs.writeFile(
  path.join(__dirname, "test", "teste.txt"),
  "hello word!",
  (error) => {
    if (error) {
      return console.log("Erro ", error);
    }
    console.log("Arquivo criado com sucesso!");

    fs.appendFile(
      path.join(__dirname, "test", "teste.txt"),
      "hello node",
      (error) => {
        if (error) {
          return console.log("Erro:", error);
        }
        console.log("Arquivo editado com sucesso");
      },
    );

    fs.readFile(
      path.join(__dirname, "/test", "teste.txt"),
      "utf8",
      (error, data) => {
        if (error) {
          return console.log("Erro:", error);
        }
        console.log(data);
      },
    );
  },
);
