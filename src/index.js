import $ from "jQuery";
import DinoService from "./dinoService";

let p = 10;
let w = 10;

let promise = DinoService.getDinoIpsum(p, w);
promise.then(function(response) {
  const dino = JSON.parse(response);
  console.log(dino);
  $('#dino-output').html(dino);
}, function(error) {
  $('error-output').html(error);
}); 