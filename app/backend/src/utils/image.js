const fs = require('fs');

var imageData = fs.readFileSync(__dirname + '/icon.png');

PlanetModel.create({
  image: imageData
}).then(planetmodel => {
  try {
    FS.writeFileSync(__dirname + '/target.png', planetmodel.image);
  } catch (e) {
    console.log(e);
  }
});