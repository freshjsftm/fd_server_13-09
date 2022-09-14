const http = require("http");
const fs = require("fs");
const PORT = 3000;

const requestListener = (req, res) => {
  const {method, url} = req;
  if(method === 'GET'){
    if(url === '/'){
      fs.readFile('./views/index.html', {encoding:'utf8'}, (err, data)=>{
        if(err){
          console.log(err)
        }
        res.end(data)
      })
    }
    if(url === '/about'){
      fs.readFile('./views/about.html', {encoding:'utf8'}, (err, data)=>{
        if(err){
          console.log(err)
        }
        res.end(data)
      })
    }
    if(url === '/contacts'){
      fs.readFile('./views/contacts.html', {encoding:'utf8'}, (err, data)=>{
        if(err){
          console.log(err)
        }
        res.end(data)
      })
    }
  }

};
const server = http.createServer(requestListener);
server.listen(PORT);

