//Console.log out elements in JSON file



var jsonFile = '[{"video": [{"id": 12312412312,"name": "Ecuaciones Diferenciales","url": "/video/math/edo/12312412312","author": {"data": [{"name_author": "Alejandro Morales","url": "/author/alejandro-morales","type": "master"}]}}]}]';
var info = JSON.parse(jsonFile);


for (var p in info[0].video[0]){
  if (info[0].video[0].hasOwnProperty(p)) {
    console.log(p + ": " + info[0].video[0][p]);
  }
}
for (var q in info[0].video[0].author.data[0]){
  if (info[0].video[0].author.data[0].hasOwnProperty(q)) {
    console.log(q + ": " + info[0].video[0].author.data[0][q]);
  }
}
