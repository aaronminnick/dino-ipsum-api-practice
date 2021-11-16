export default class DinoService {
  static getFromApi(url) {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      request.onload = function(){
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      };
      request.open("GET", url, true);
      request.send();
    });
  }
  
  static dinoURL(paragraphs, words) {
    return `https://dinoipsum.com/api/?format=json&paragraphs=${paragraphs}&words=${words}`;
  }

  static colorURL(r, g, b, tiles, tileSize, borderWidth) {
    return `https://php-noise.com/noise.php?r=${r}&g=${g}&b=${b}&tiles=${tiles}&tileSize=${tileSize}&borderWidth=${borderWidth}&json`;
  }
}