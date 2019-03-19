//Variable declaration for the greeting
var user = 'Joel';
var salutation1 = 'Welcome ';
var salutation2 = ' Please scroll down for pizza options'
//Concantonate the greeting message into a variable
var greeting = salutation1 + user +'!' + salutation2;

//Get the element that has Id of greeting
var jsg = document.getElementById('greeting');
//Replace HTML greeting with JS greeting
jsg.textContent = greeting;


//function for generating the random pizza
function myFunction() {
  var size = ["Medium","Large","Family Size"],
      sizePicked = size[Math.floor(Math.random() * size.length)];
  var crust = ["Thin","Hand Tossed","Pan","Gluten Free"],
      crustPicked = crust[Math.floor(Math.random() * crust.length)];
  var sauce = ["Marinara","Alfredo","Garlic"],
      saucePicked = sauce[Math.floor(Math.random() * sauce.length)];
  var meat =["Sausage","Ham","Pepperoni","Bacon","Canadian Bacon"],
      meatPicked = meat[Math.floor(Math.random() * meat.length)];
  var veggie = ["Mushrooms","Black Olives","Onions","Green Peppers","Tomoatoes"],
      veggiePicked = veggie[Math.floor(Math.random() * veggie.length)];
  document.getElementById("RandomPie").innerHTML= "Your pizza is a " +sizePicked + " " + saucePicked + " sauce,  "
   + meatPicked + ", and " + veggiePicked + " on a " + crustPicked + " crust!"
}
