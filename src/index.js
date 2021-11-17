import $ from "jQuery";
import "./css/styles.css";
import DinoService from "./dinoService";

let p = 1;
let w = 10;

DinoService.getFromApi(DinoService.dinoURL(p, w))
.then(function(response) {
  const dino = JSON.parse(response);
  $('#dino-output').html(dinoFormat(dino));
  return DinoService.getFromApi(DinoService.colorURL(140, 160, 200, 40, 5, 3));
}).then(function(response) {
  const color1= JSON.parse(response);
  $('.color1').css('background-image', `url("${color1.uri}")`);
  return DinoService.getFromApi(DinoService.colorURL(230, 60, 75, 40, 6, 7));
}).then(function(response) {
  const color2= JSON.parse(response);
  $('.color2').css('background-image', `url("${color2.uri}")`);
}).catch(function(error) {
  $('error-output').html('something broke:' + error);
}); 

function dinoFormat(dinoJson) {
  let outputHtml = '';
  dinoJson.forEach(element => {
    outputHtml += '<ol>';
    let colorPicker = true;
    element.forEach(subelement => {
      if (colorPicker) {
        outputHtml+=`<li class='color1'>${subelement}</li>`;
        colorPicker = false;
      } else {
        outputHtml+=`<li class='color2'>${subelement}</li>`;
        colorPicker = true;
      }
    });
    outputHtml += '</ol>';
  });
  return outputHtml;
}