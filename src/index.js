import $ from "jQuery";
import DinoService from "./dinoService";

let p = 1;
let w = 10;

let promise = DinoService.getFromApi(DinoService.dinoURL(p, w));
promise.then(function(response) {
  const dino = JSON.parse(response);
  $('#dino-output').html(dinoFormat(dino));
}, function(error) {
  $('error-output').html(error);
}); 

let colorPromise = DinoService.getFromApi(DinoService.colorURL(140, 160, 200, 40, 20, 3));
colorPromise.then(function(response) {
  const color= JSON.parse(response);
  console.log(color);
  $('#bg').css('background-image', `url("${color.uri}")`);
}, function(error) {
  $('error-output').html(error);
}); 

function dinoFormat(dinoJson) {
  let outputHtml = '';
  dinoJson.forEach(element => {
    outputHtml += '<ol>';
    element.forEach(subelement => {
      outputHtml+=`<li>${subelement}</li>`;
    });
    outputHtml += '</ol>';
  });
  return outputHtml;
}