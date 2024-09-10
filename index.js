//let x = 100;
//let age = 25;
//let gpa = 2.1;

//console.log(typeof gpa)
//console.log(`The value of x is ${x}`);
//console.log(`Your age is ${age}`)
//console.log(`Your gpa is ${gpa}`)

//let username = window.prompt(`What's your username?`)

//console.log(username)

//let username;

//document.getElementById("mySubmit").onclick = function(){
  //  username = document.getElementById("myText").value
   // document.getElementById("myH1").textContent = `Hello ${username}`
//}

//let age = window.prompt(`How old are you?`)
//age = Number(age)
//age *= 7
//console.log(age, typeof age)

//const PI = 3.14159
//let radius
//let circumference


//document.getElementById("mySubmit").onclick = function(){
 // radius = document.getElementById("myText").value
  //radius = Number(radius)
  //circumference = 2 * PI * radius

  //document.getElementById("myH3").textContent = circumference + `cm`
//}

//const decreasebtn = document.getElementById("decreasebtn")
//const resetbtn = document.getElementById("resetbtn")
//const increasebtn = document.getElementById("increasebtn")
//const countLabel = document.getElementById("countLabel")
//let count = 0

//increasebtn.onclick = function(){
 // count++
//  countLabel.textContent = count
//}
//decreasebtn.onclick = function(){
//  count--
  //countLabel.textContent = count
//}
//resetbtn.onclick = function(){
  //count = 0
  //countLabel.textContent = count
//}

//const myText = document.getElementById("myText")
//const mySubmit = document.getElementById("mySubmit")
//const resultElement = document.getElementById("resultElement")
//et age

//mySubmit.onclick = function(){
 // age = myText.value 
 // age = Number(age)

 // if(age >= 100){
 //   resultElement.textContent = (`You are too old for this site`)
 // }
 // else if(age == 0){
 //   resultElement.textContent = (`Nah btch you just popped out`)
 // }
 // else if(age >= 18){
 //   resultElement.textContent = (`You are allowed to enter this site`)
 // }
 // else if(age < 0){
 //   resultElement.textContent = (`dude are we dumb`)
 // }
 // else{
 //   resultElement.textContent = (`You are not allowed to enter this site`)
 // }
//}
//const myCheckbox = document.getElementById("myCheckbox")
//const visabtn = document.getElementById("visabtn")
//const mcbtn = document.getElementById("mcbtn")
//const paypalbtn = document.getElementById("paypalbtn")
//const mySubmit = document.getElementById("mySubmit")
//const subresult = document.getElementById("subresult")
//const paymentresult = document.getElementById("paymentresult")

//mySubmit.onclick = function(){
 // if (myCheckbox.checked) {
 //   subresult.textContent = 'You are subscribed.'
  //}
  //else{
//    subresult.textContent = 'You are not subscribed.'
 // }
  //if(visabtn.checked){
  //  paymentresult.textContent = 'You are paying with Visa.'
 // }
 // else if(mcbtn.checked){
  //  paymentresult.textContent = 'You are paying with Mastercard'
 // }
 // else if(paypalbtn.checked){
 //   paymentresult.textContent = 'You are paying with Paypal'
  //}
 // else{
  //  paymentresult.textContent = 'You must select a payment type.'
 // }
//}

//let purchaseamount = 150
//let discount = purchaseamount >= 200 ? 15 : 0
//console.log(`Your total is ${purchaseamount - purchaseamount * (discount/100)}`)

//let testscore = 67
//let lettergrade

//switch(true){
 // case testscore >= 90:
 //   lettergrade = "A"
  //  break
  //case testscore >= 80:
  //  lettergrade = "B"
  //  break
  //case testscore >= 70:
  //  lettergrade = "C"
  //  break
  //case testscore >= 60:
 //   lettergrade = "D"
 //  break
 // default:
 //   lettergrade = "F"
//}
//console.log(lettergrade)

//let username = window.prompt("What is your username:")

//username = username.trim()
//let letter = username.charAt(0)
//letter = letter.toUpperCase()

//l//et extraletters = username.slice(1)
//extraletters = extraletters.toLowerCase()
//username = letter + extraletters



//username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase()

//console.log(username)

//function mydata(data, number){
 // console.log("This is mydata1")
 // console.log(`This is ${data}`)
 // console.log("This is mydata3")
  //console.log("This is mydata4")
  //console.log(`This is ${number}`)
//}

//mydata("python", 26)

//const textbox = document.getElementById("textbox")
//const toFahrenheit = document.getElementById("toFahrenheit")
//const toCelcius = document.getElementById("toCelcius")
//const result = document.getElementById("result")
//let temp

//function convert(){
 // if(toFahrenheit.checked){
 //   temp = Number(textbox.value)
 //   temp = temp * 9 / 5 + 32
 //   result.textContent = temp.toFixed(1) + "°F"
 // }
 // else if(toCelcius.checked){
 ///   temp = Number(textbox.value)
 //   temp = (temp - 32) * (5 / 9)
 //   result.textContent = temp.toFixed(1) + "°C"
 // }
 // else{
 //   result.textContent = "Select a unit"
 //}
//}

//matrix = [[1, 2, 3],
 //         [4, 5, 6],
  //        [7, 8, 9]]

//matrix[0][0] = 'x'
//matrix[0][1] = '0'
//matrix[0][2] = 'x'

//matrix[1][0] = '0'
//matrix[1][1] = 'x'
//matrix[1][2] = '0'

//atrix[2][0] = 'x'
//matrix[2][1] = '0'
//matrix[2][2] = 'x'
          
//for(let row of matrix){
 // const rowString = row.join(' ')
 // console.log(rowString)
//}
//function rollDice(){
  //const numOfDice = document.getElementById("numOfDice").value
  //const diceResult = document.getElementById("diceResult")
  //const diceImages = document.getElementById("diceImages")
  //const values = []
  //const images = []

  //for(i = 0; i < numOfDice; i++){
  //  const value = Math.floor(Math.random() * 6) + 1
  //  values.push(value)
  //  images.push(`<img src="dice_images/${value}.PNG" alt="Dice ${value}">`)
  //}
  ///diceResult.textContent = `dice: ${values.join(', ')}`
  //diceImages.innerHTML = images.join('')
//}

//function generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){
 // const lowerChars = "abcdefghijklmnopqrstuvwxyz"
 // const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
 // const numberChars = "0123456789"
  //const symbolChars = "!@#$%^&*()-_=+"

 // let allowedChars = ""
 // let password = ""

//allowedChars += includeLowercase ? lowerChars : ""
 /// allowedChars += includeUppercase ? upperCase : ""
 // allowedChars += includeNumbers ? numberChars : ""
 // allowedChars += includeSymbols ? symbolChars : ""

 // if(length <= 0){
 //   return `password length must be at least 1`
 // }
 // if(allowedChars.length === 0){
 //   return `at least 1 character needs to be selected`
 // }
  //for(let i = 0; i < length; i++){
  //  const randomIndex = Math.floor(Math.random() * allowedChars.length)
  //  password += allowedChars[randomIndex]
 // }

 // return password
//}
//const passwordLength = 12
//const includeLowercase = true
///const includeUppercase = true
//const includeNumbers = true
// includeSymbols = true

//const password = generatePassword(passwordLength,
 //                                 includeLowercase,
 //                                 includeUppercase,
 //                                 includeNumbers,
//                                  includeSymbols)
//
//console.log(`Generate a password: ${password}`)                                

//const Pokemon = {
 //fullname: "Rayquaza",
  //ability: "delta stream",
  ///level: 70,
 // specmov: ["Dragon Ascent", "Draco Meteor"],
 /// address: {
 //   route: 114,
 //   city: "Soothopolis",
 //   tower: "sky tower",
 // }
//}

//for(const locat in Pokemon.address){
 /// console.log(Pokemon.address[locat])
//}
//class Pokemon{
 // constructor(specie, level, nature, ability, ...address){
 //   this.specie = specie
 //   this.level = level
 //   this.nature = nature
 //   this.ability = ability
 //   this.address = new Address(...address)
 // }
//}
//class Address{
  //constructor(region, city, route, cave){
  ///  this.region = region
  //  this.city = city
 //  this.route = route
 //   this.cave = cave
 // }
///}
///
//const specie1 = new Pokemon("Mewtwo", 70, "timid", "pressure", 
//                           "Kanto", "Celladon", 
///                           112, "celladon cave")
//
//const specie2 = new Pokemon("Lugia", 70, "bold", "pressure", 
//                            "Kanto", "Cinnaber", 
//                            112, "deap sea cave")
//
//const specie3 = new Pokemon("Ho-oH", 70, "Adamant", "pressure", 
//                              "Johto", "Ecruteak", 
//                              112, "Belltower")

//console.log(specie3.address.city)

//const Pokemons = [{name: "Moltress", ability: "Pressure", level: 23, nature: "Timid"},
  //                {name: "Zapdos", ability: "Electrik", level: 39, nature: "Mild"},
  //                {name: "Articuno", ability: "Frost", level: 49, nature: "Timid"},
  //                {name: "Lugia", ability: "Whirls", level: 65, nature: "Bold"},
 ////                 {name: "Ho-oh", ability: "Sunny", level: 65, nature: "Adamant"},
 //                 {name: "Mewtwo", ability: "Labtwo", level: 70, nature: "Modest"},
 //                 {name: "Mew", ability: "Lab", level: 5, nature: "Naive"}]

                  
//Pokemons.forEach(Pokemons => console.log(Pokemons.name))
//const pokemonNames = Pokemons.filter(Pokemons => Pokemons.name)
////const pokemonAbility = Pokemons.filter(Pokemons => Pokemons.ability)
//const maxLevel = Pokemons.reduce( (max, pokemon) => pokemon.level > max.level ? 
                                                              //    pokemon : max);
//const minLevel = Pokemons.reduce( (min, pokemon) => pokemon.level < min.level ? 
                                               //                   pokemon : min);


///console.log(maxLevel)
//console.log(minLevel)

//const date = new Date()
//
//const year = date.getFullYear()
//const month = date.getMonth()
//const day = date.getDate()
// minute = date.getMinutes()
// seconds = date.getSeconds()
// millisec = date.getMilliseconds()
//const time = date.getTime()

/////.log(year)
//console.log(month)
//c//onsole.log(day)
//console.log(minute)
//.log(seconds)
//.log(millisec)
//console.log(time)

// counter(){
//  let count = 0
//  function increment(){
//    count++
//console.log(`Count increased to ${count}`)
//  }
//
//  return {increment}
//}
//
//const countee = counter()
//
//countee.increment()
//countee.increment()
//countee.increment()
//countee.increment()

//let timeoutID

//function startTimer(){
 /// timeoutID = setTimeout(() => window.alert("Yo"), 4000)
 // console.log("Started")

//}

//function clearTimer(){
 // clearTimeout(timeoutID)
  //console.log("Cleared")
//}//

//function loadData(){

  //console.time(loadData)

  //for(let i = 0; i < 1000000000; i++){
  //  //pretend to load data
 // }

//  console.timeEnd(loadData)
//}

//unction processData(){

  //console.time(processData)
    
  ///  for(let i = 0; i < 100000000; i++){
  ////    //pretend to pass in a comment
 // }

 // console.timeEnd(processData)
//}

//loadData()
//processData()

///function calculate(){
//  const totalAmount = document.getElementById("total-amount")
//  const principalInput = document.getElementById("principal")
//  const rateInput = document.getElementById("rate")
//  const yearsInput = document.getElementById("years")
//
//  let principal = Number(principalInput.value)
//  let rate = Number(rateInput.value / 100)
//  let years = Number(yearsInput.value)
//
//  if(principal < 0 || isNaN(principal)){
//    principal = 0
//    principalInput.value = 0
//  }
//
//  if(rate < 0 || isNaN(rate)){
//    rate = 0
//    rateInput.value = 0
//  }
//
//  if(years < 0 || isNaN(years)){
 //   years = 0
 //   yearsInput.value = 0
 // }
//
 // const result = principal * Math.pow((1 + rate/1), 1 * years)
//
 // totalAmount.textContent = result.toLocaleString(undefined, 
 //                                                 {style: "currency",
//                                                    currency: "PKR"})
//}

//function updateClock(){
 // const now = new Date()
  //let hours = now.getHours()
  //const meridiem = hours >= 12 ? "PM" : "AM"
  //hours = hours % 12 || 12
  //hours = hours.toString().padStart(2, 0)
 // const minutes = now.getMinutes().toString().padStart(2, 0)
  //const seconds = now.getSeconds().toString().padStart(2, 0)
 // const timestring =  `${hours}:${minutes}:${seconds} ${meridiem}`
 // document.getElementById("clock").textContent = timestring
//}

//updateClock()
//setInterval(updateClock, 1000)
//const display = document.getElementById("display")
//let Timer = null
//let startTime = 0
///let elapsedTime = 0
//let isRunning = false

//function start(){
 // if(!isRunning){
  //  startTime = Date.now() - elapsedTime
  //  Timer = setInterval(update, 10)
 //   isRunning = true
 // }
//}

//function stop(){

  //if(isRunning){
  //  clearInterval(Timer)
  //  elapsedTime = Date.now() - startTime
 //   isRunning = false
 // }
//}

///function reset(){

 // clearInterval(Timer)
 // startTime = 0
 // elapsedTime = 0
 /// isRunning = false
////  display.textContent = "00:00:00:00"

//}

//function update(){
 /// const currentTime = Date.now()
//  elapsedTime = currentTime - startTime
 // let hours = Math.floor(elapsedTime / 3600000); // Corrected to divide by 3600000  
 // let minutes = Math.floor((elapsedTime % 3600000) / 60000); // Calculate remaining minutes  
 // let seconds = Math.floor((elapsedTime % 60000) / 1000); // Calculate remaining seconds  
 // let millisec = Math.floor((elapsedTime % 1000) / 10); // Calculate milliseconds  


 // display.textContent = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}:${millisec.toString().padStart(2, "0")}`
//}

//const display = document.getElementById("display")

///function AppendToDisplay(input){
 // display.value += input
//}

//function clearDisplay(){
 // display.value = ""
//}
//
//function deleteLast(){
 // display.value = display.value.slice(0, -1)
//}
//
//function calculate(){
 // try{
  //  display.value = eval(display.value).toFixed(2)
 // }
 // catch(error){
//    display.value = "Error"
//  }
//}
//
//function calculateSquareRoot(){ 
//  const value = parseFloat(display.value); // Get the current value  
 // if (!isNaN(value) && value >= 0) {  
 //     const result = Math.sqrt(value).toFixed(2); // Calculate square root and format  
 //     display.value = result;  
 // } else {  
 //     display.value = "Error"; // Handle invalid input  
 // } 
//}
//const li = document.createElement("li")

//li.textContent = 'Koraidon, Urshifu, Passimion, Machamp, Poliwrath, Meloetta,Throh, Sawk, Conkeldurr'
////li.style.color = "black"
//li.style.fontWeight = "bold"
//li.style.fontSize = "2rem"

//document.getElementById("box1").append(li)

//const li1 = document.createElement("li")

//li1.textContent = 'Steelix, Ferrothorn, Bronzong, Dialga, Probopass, Aggron, Metagross, Skarmory, Empoleon'
//li1.style.color = "black"
//li1.style.fontWeight = "bold"
//li1.style.fontSize = "2rem"

//document.getElementById("box2").prepend(li1)

//const li2 = document.createElement("li")

//li2.textContent = 'Florges, Xerneas, Ribonbee, Clefable, Wigglytuff'
//li2.style.color = "black"
//li2.style.fontWeight = "bold"
//li2.style.fontSize = "2rem"

//document.getElementById("box3").append(li2)

//const myBox = document.getElementById("myBox")
//const myButton = document.getElementById("myButton")

//myButton.addEventListener("click", event => {
  //myBox.style.backgroundColor = ("tomato")
  //m/yBox.textContent = "Ahhhhhh~🥵"
  ///myBox.style.width = "250px";
//})

//myButton.addEventListener("mouseover", event => {
  //myBox.style.backgroundColor = ("red")
  //myBox.textContent = "Doooon't🥺"
  //myBox.style.width = "250px";
//})

//myButton.addEventListener("mouseout", event => {
  //myBox.style.backgroundColor = ("aquamarine")
  //myBox.textContent = "Click me! 😏"
  //myBox.style.width = "150px";
///})

//const buttons = document.querySelectorAll(".myButtons");  
//
//buttons.forEach(button => {  
 // button.addEventListener("mouseover", event => {  
 //   button.textContent = "Do you wish to evolve your pokemon?";  
 //   button.style.fontSize = "1rem";  
 // });  
//
 // button.addEventListener("click", event => {  
 //   if (button.classList.contains("red")) {  
 //     button.textContent = "Charmeleon!"; 
 //     button.style.backgroundColor = "rgb(246, 14, 14)";  
 //   } else if (button.classList.contains("green")) {  
 //     button.textContent = "Ivysaur!"; 
 //     button.style.backgroundColor = "rgb(27, 188, 15)";  
 //   } else if (button.classList.contains("blue")) {  
 //     button.textContent = "Wartortle!"; 
 //     button.style.backgroundColor = "rgb(57, 144, 210)";  
 ///   } else if (button.classList.contains("yellow")) {  
 //     button.textContent = "Raichu!"; 
 //     button.style.backgroundColor = "rgb(245, 255, 56)";  
 //   } else if (button.classList.contains("pink")) {  
 //     button.textContent = "Mewtwo!"; 
 //     button.style.backgroundColor = "rgb(181, 73, 174)";  
 //     button.style.fontSize = "2rem";
 //     button.style.width = "160px"
 //   }  
 //   button.style.fontSize = "2rem";  
 // });  
//
 // button.addEventListener("mouseout", event => {  
 //   if (button.classList.contains("red")) {  
 //     button.textContent = "Charmander"; 
 //     button.style.backgroundColor = "rgb(246, 14, 14)";  
 //   } else if (button.classList.contains("green")) {  
//button.textContent = "Bulbasaur"; 
//button.style.backgroundColor = "rgb(27, 188, 15)";  
//} else if (button.classList.contains("blue")) {  
  //    button.textContent = "Squirtle"; 
  //    button.style.backgroundColor = "rgb(57, 144, 210)";  
//} else if (button.classList.contains("yellow")) {  
  // /   button.textContent = "Pikachu"; 
 //  /   button.style.backgroundColor = "rgb(245, 255, 56)";  
   // } else if (button.classList.contains("pink")) {  
   //   button.textContent = "Mew"; 
   //   button.style.backgroundColor = "rgb(181, 73, 174)";  
  //    button.style.width = "125px"

  //  }  
  //  button.style.fontSize = "2rem"; 
  //});  
///});

//const buttons = document.querySelectorAll(".myButton")
//
///buttons.forEach(button => {
//  button.classList.toggle("enabled")
///})
//
//buttons.forEach(button => {
//  button.addEventListener("mouseover", event => {
//    event.target.classList.toggle("hover")
// })
//})
///
//buttons.forEach(button => {
//  button.addEventListener("mouseout", event => {
//    event.target.classList.toggle("hover")
// })
//})
//
//buttons.forEach(button => {
//  button.addEventListener("click", event => {
//    if (event.target.classList.contains("disabled")){
//        event.target.textContent += "Y"
//    } 
//    
//    else{
//       event.target.classList.replace("enabled", "disabled")
//    }
//  })
///})

//const slides = document.querySelectorAll(".slides img")
//let slideIndex = 0
//let intervalId = null
///
/////initializeSlide()
//document.addEventListener("DOMContentLoaded", initializeSlider)
//
///function initializeSlider(){
//  if(slides.length > 0){
//    showSlide(slideIndex);
//    intervalId = setInterval(nextSlide, 5000);
///  }
//}
//
//function showSlide(index){
//  if(index >= slides.length){
//    slideIndex = 0;
//  }
//  else if(index < 0){
//    slideIndex = slides.length - 1;
//  }
//  slides.forEach(slide => {
//    slide.classList.remove("displaySlide");
//  });
//  slides[slideIndex].classList.add("displaySlide");
//}
//
//function prevSlide(){
//  clearInterval(intervalId);
//  slideIndex--;
//  showSlide(slideIndex);
///  intervalId = setInterval(nextSlide, 5000);
//}
//
//function nextSlide(){
//  clearInterval(intervalId);
//  slideIndex++;
//  showSlide(slideIndex);
//  intervalId = setInterval(nextSlide, 5000);
//}

//function pickButton(){
//
//  return new Promise((resolve, reject) => {
//
//    setTimeout(() => {
//
//      const buttonPicked = false
//
//      if(buttonPicked){
//        resolve("pick up the stove's button")
//      }
//      else{
//        reject("You didn't pick it up")
//      }
//
//  }, 1500);
//})
///}
///
//function takeTrash(){ 
///
//  return new Promise((resolve, reject) => {
//
//    setTimeout(() => {
//
//      const trashtakenout = true
//
//      if(trashtakenout){
//        resolve("You took out the trash")
//      }
//      else{
//        reject("You didn't take out the trash")
//      }
//
//  }, 2500);
//})
//}
//
//function buymilk(){ 
//
//  return new Promise((resolve, reject) => {
//
//    setTimeout(() => {
//
//      const milkbought = true
//
//      if(milkbought){
//        resolve("You bought milk from the store")
//      }
//else{
//        reject("You didn't buy any milk")
//      }
//
///  }, 500);
//})
//}
//
//pickButton().then(value => {console.log(value); return takeTrash()})
//             .then(value => {console.log(value); return buymilk()})
//             .then(value => {console.log(value); console.log("You are done with tasks")})
 //            .catch(error => console.error(error));

//fetchData()
//
 //async function fetchData(){
 //  try{
 //   const pokename = document.getElementById("pokename").value.toLowerCase();
 //   const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokename}`)
//
 //   if(!response.ok){
 //     throw new Error("Your data couldn't be found");
 //   }
 //   
 //   const data = await response.json()
 //   const pokesprite = data.sprites.front_default
 //   const imgElement = document.getElementById("pokesprite")
//
 //   imgElement.src = pokesprite
//
 // }
 // catch(error){
//console.error(error)
///  }
 //}





/// const weatherForm = document.querySelector(".weatherForm")
// const cityInput = document.querySelector(".cityInput")
// const card = document.querySelector(".card")
// const apiKey = "fe5f4c7f84ed1297b0e447da6ab26372"
//
// weatherForm.addEventListener("submit", async event =>{
//  event.preventDefault()
//  const city = cityInput.value
//
// if(city){
 //   try{
 //     const weatherData = await getWeatherData(city)
 //     displayWeatherInfo(weatherData)
 //   }
 //   catch(error){
 //     console.error(error)
 //     displayError(error)
 //   }
//
 // }
 // else{
 //   displayError("Please enter a city")
 // }
//
 //})
//
 //async function getWeatherData(city){
 // const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
 /// const response = await fetch(apiUrl)
//
 /// if(!response.ok){
 //   throw new Error("could not fetch weather data")
 // }
//
 // return await response.json()
 //}
//
 ////function displayWeatherInfo(data){
 // const {name: city, 
 //       main: {temp, humidity}, 
 //       weather: [{description, id}]} = data
 // 
 //       card.textContent = ""
 ///       card.style.display = "flex"
//
 // const cityDisplay = document.createElement("h1")
//
 // const tempDsiplay = document.createElement("p")
//
 // const humidityDisplay = document.createElement("p")
//
 // const descDisplay = document.createElement("p")
//
 // const weatherEmoji = document.createElement("p")
//
 // cityDisplay.textContent = city
 // tempDsiplay.textContent = `${((temp) - 273.15).toFixed(1)}°C`
 // humidityDisplay.textContent = `Humidity: ${humidity}%`
 // descDisplay.textContent = description
 // weatherEmoji.textContent = getWeatherEmoji(id)
//
//
 // cityDisplay.classList.add("cityDisplay")
 /// tempDsiplay.classList.add("tempDisplay")
 /// humidityDisplay.classList.add("humidityDisplay")
 /// descDisplay.classList.add("descDisplay")
 /// weatherEmoji.classList.add("weatherEmoji")
//
//
 // card.appendChild(cityDisplay)
 // card.appendChild(tempDsiplay)
 // card.appendChild(humidityDisplay)
 /// card.appendChild(descDisplay)
 // card.appendChild(weatherEmoji)
 //}
//
 //function getWeatherEmoji(weatherId){
 /// switch(true){
 //   case (weatherId >= 200 && weatherId <= 300):
 //     return "⛈️";
 //   case (weatherId >= 300 && weatherId <= 400):
 //     return "🌧️";
 //   case (weatherId >= 500 && weatherId <= 600):
 //     return "☔";
 //   case (weatherId >= 600 && weatherId <= 700):
 //     return "❄️";
 //   case (weatherId >= 700 && weatherId <= 799):
 //     return "🌫️";
 //   case (weatherId === 800):
 //     return "☀️";
 //   case (weatherId >= 801 && weatherId <= 810):
 //     return "☁️";
 //   default:
 //       return "⁉️";
 // }
 //}
//
 //function displayError(message){
 // const errorDisplay = document.createElement("p")
 // errorDisplay.textContent = message
 // errorDisplay.classList.add("errorDisplay")
//
 // card.textContent = ""
 //// card.style.display = "flex"
 // card.appendChild(errorDisplay)

 //}
//
// document.addEventListener('DOMContentLoaded', function() {
//  const taskInput = document.getElementById('taskInput');
///  const addTaskBtn = document.getElementById('addTaskBtn');
//  const taskList = document.getElementById('taskList');
///
//  addTaskBtn.addEventListener('click', function() {
//      const taskText = taskInput.value.trim();
//      if (taskText !== '') {
///          addTask(taskText);
// /         taskInput.value = '';
//      }
///  });
///
///  taskList.addEventListener('click', function(event) {
//      if (event.target.tagName === 'BUTTON') {
///          deleteTask(event.target.parentElement);
///      } else if (event.target.tagName === 'LI') {
//          toggleTaskCompletion(event.target);
//      }
//  });
//
//  function addTask(taskText) {
//      const li = document.createElement('li');
//      li.textContent = taskText;
//
//      const deleteBtn = document.createElement('button');
//      deleteBtn.textContent = 'Delete';
//      li.appendChild(deleteBtn);
//
///      taskList.appendChild(li);
///  }
///
//  function deleteTask(task) {
//      task.remove();
//  }
//
 // function toggleTaskCompletion(task) {
 //     task.classList.toggle('completed');
 // }
//});

//document.addEventListener('DOMContentLoaded', function() {
 // const convertButton = document.getElementById('convertButton');
 // convertButton.addEventListener('click', function() {
  //    const temperatureInput = parseFloat(document.getElementById('temperatureInput').value);
  //    const conversionType = document.getElementById('conversionType').value;
   //   let result;
//
  //    if (conversionType === 'cToF') {
  ///        result = celsiusToFahrenheit(temperatureInput);
  //        document.getElementById('result').innerText = `${temperatureInput}°C is equal to ${result.toFixed(2)}°F`;
 ///     } else if (conversionType === 'fToC') {
 //         result = fahrenheitToCelsius(temperatureInput);
 //         document.getElementById('result').innerText = `${temperatureInput}°F is equal to ${result.toFixed(2)}°C`;
 //     }
 // });
//
 // function celsiusToFahrenheit(celsius) {
 //     return (celsius * 9/5) + 32;
////  }

 // function fahrenheitToCelsius(fahrenheit) {
//      return (fahrenheit - 32) * 5/9;
 // }
//});

//function pokemongen(pokemon){
 // const {Name, Type} = pokemon
 // const newpokemon = {
 //   Name,
 //   Type, 
 //   Region: 'Kanto'
 // }

 /// console.log(`${newpokemon.Name}, ${newpokemon.Type}, ${newpokemon.Region}`)
//
//}

//pokemongen({Name: 'Dragonite', Type: 'Dragon/Flying'})

//function userData(){
  //return new Promise((resolve, reject) => {
   // setTimeout(() => {
     // const error = true
     // const username = "John"
     // const password = "1234"
     // const email = "john123@gmail.com"
     // if(error){
     //   reject("sorry you haven't entered your name")
     // } else{
     //   resolve("Your username is " + username + " and your password is " + password + " and your email is " + email)
     // }
   //// })
//}
//
//userData().then(value => {console.log(value); return userData()})
   //      .catch(error => console.log(error))
   //      .finally(() => console.log("Your data has been fetched"))

   var sunglassesOptions = {
    models: [
        {
            name: "aviator",
            price: 300,
            thumbImg: "thumb-aviator.png",
            cssClass: "frame-aviator",
        },
        {      
            name: "half-frame",
            price: 200,
            thumbImg: "thumb-half-frame.png",
            cssClass: "frame-half",
        },
        {
            name: "round",  
            price: 250,
            thumbImg: "thumb-round.png",
            cssClass: "frame-round",
        },
        {  
            name: "wayfarer",
            price: 250,
            thumbImg: "thumb-wayfarer.png",
            cssClass: "frame-wayfarer",
        }],
    lenses: [
        {
            color: "sepia",
            price: 20,
            cssClass: "color-sepia",
        },
        {
            color: "rainbow",
            price: 50,
            cssClass: "color-rainbow",
        },
        {
            color: "iridescent",
            price: 30,
            cssClass: "color-iridescent",
        }],
    frames: [
        {
            color: "charcoal",
            price: 0,
            cssClass: "color-charcoal",
        },
        {
            color: "tan",
            price: 0,
            cssClass: "color-tan",
        },
        {
            color: "rose",
            price: 0,
            cssClass: "color-rose",
        },
    ],
}

var sunglasses = {
    model: {
        name: "aviator",
        price: 300,
        thumbImg: "./images/thumb-aviator.png",
        cssClass: "frame-aviator",
    },
    lenses: {
        color: "sepia",
        price: 20,
        cssClass: "color-sepia",
    },
    frame: {
        color: "charcoal",
        price: 0,
        cssClass: "color-charcoal",
    }     
}



var productDetailsEl = document.getElementById("productDetails")
var productImage = document.getElementById("productImage")
var productFrames = document.getElementsByClassName("product-image_frame")[0]
var productLenses = document.getElementsByClassName("product-image_lenses")[0]

var sunglassesNew = ''

function setSunglasses(sunglassesNew = sunglasses) {
    return sunglassesNew
}

function render(sunglassesNew) {
    
    var sunglassesNew = {
        model: {
            name: sunglassesNew.model.name,
            price: sunglassesNew.model.price,
            thumbImg: sunglassesNew.model.thumbImg,
            cssClass: sunglassesNew.model.cssClass,
        },
        lenses: {
            color: sunglassesNew.lenses.color,
            price: sunglassesNew.lenses.price,
            cssClass: sunglassesNew.lenses.cssClass,
        },
        frame: {
            color: sunglassesNew.frame.color,
            price: sunglassesNew.frame.price,
            cssClass: sunglassesNew.frame.cssClass,
        }     
    }
    var price = "$" + (sunglassesNew.model.price + sunglassesNew.lenses.price + sunglassesNew.frame.price)
    
  
    productDetailsEl.innerHTML = 
    "<h1>" + sunglassesNew.model.name + "</h1>" +
    "<p>Custom: "  + sunglassesNew.lenses.color + " lenses, " + sunglassesNew.frame.color + " frames</p>" +
    "<p>" + price + "</p>"
    
    var currClass = productImage.classList[1]
    productImage.classList.replace(currClass, sunglassesNew.model.cssClass)
    
    var currFramesClass = productFrames.classList[1]
    productFrames.classList.replace(currFramesClass, sunglassesNew.frame.cssClass)
    
    var currLensesClass = productLenses.classList[1]
    productLenses.classList.replace(currLensesClass, sunglassesNew.lenses.cssClass)
    
}

//Highlight current selection
function addHighlight(clickedItem) {
    if (clickedItem.classList.contains("product-thumb")) {
        Array.from(document.getElementsByClassName("product-thumb"))
            .forEach(function(thumb) {
               thumb.classList.remove("selected") 
            }) 
    } else if (clickedItem.classList.contains("product-color-swatch")) {
        var siblings = clickedItem.closest("ul").querySelectorAll("button")
        Array.from(siblings)
            .forEach(function(swatch) {
               swatch.classList.remove("selected") 
            })
    }
    clickedItem.classList.add("selected") 
}
// Add this to your index.js file
document.addEventListener('DOMContentLoaded', () => {
  const selectedGlasses = document.getElementById('selectedGlasses');
  const thumbnails = document.querySelectorAll('.product-thumb');

  thumbnails.forEach(thumb => {
      thumb.addEventListener('click', () => {
          // Update selected class
          thumbnails.forEach(t => t.classList.remove('selected'));
          thumb.classList.add('selected');

          // Update main image
          selectedGlasses.src = thumb.dataset.image;

          // Update frame class on product-image div
          const productImage = document.getElementById('productImage');
          productImage.className = `product-image frame-${thumb.dataset.name}`;
      });
  });
});

document.body.addEventListener("click", function(event) {
    var clickedItem = event.target
    //if sunglassesNew defined take variable from updates 
        //else use original sunglasses object
    if (!sunglassesNew) {
        sunglassesNew = sunglasses
    }
    
    // update model
    if (clickedItem.classList.contains("product-thumb")) {

        var currName = clickedItem.dataset.name

        var modelOptions = sunglassesOptions.models
        .filter(function(item) {
            return item.name === currName
        })[0]
        
        var name = modelOptions.name
        var price = modelOptions.price
        var thumbImg = modelOptions.thumbImg
        var cssClass = modelOptions.cssClass
        
        sunglassesNew = {
            model: {
                name: name,
                price: price,
                thumbImg: sunglassesNew.model.thumbImg,
                cssClass: cssClass,
            },
            lenses: {
                color: sunglassesNew.lenses.color,
                price: sunglassesNew.lenses.price,
                cssClass: sunglassesNew.lenses.cssClass,
            },
            frame: {
                color: sunglassesNew.frame.color,
                price: sunglassesNew.frame.price,
                cssClass: sunglassesNew.frame.cssClass,
            }     
        }
       
        addHighlight(clickedItem)
        setSunglasses(sunglassesNew)
        render(sunglassesNew)
    }
    
    // update colors for frames / lenses
    if (clickedItem.classList.contains("product-color-swatch")) {
        var currColor = clickedItem.dataset.color
        
        // check nearest parent div
            //lenses
        if (clickedItem.closest("div").classList[0] === "product-lenses") {
            var colorOptions = sunglassesOptions.lenses
            .filter(function(item) {
                return item.color === currColor
            })[0]
            
            var color = colorOptions.color
            var price = colorOptions.price
            var cssClass = colorOptions.cssClass
        
            sunglassesNew = {
                model: {
                    name: sunglassesNew.model.name,
                    price: sunglassesNew.model.price,
                    thumbImg: sunglassesNew.model.price,
                    cssClass: sunglassesNew.model.cssClass,
                },
                lenses: {
                    color: color,
                    price: price,
                    cssClass: cssClass,
                },
                frame: {
                    color: sunglassesNew.frame.color,
                    price: sunglassesNew.frame.price,
                    cssClass: sunglassesNew.frame.cssClass,
                }     
            }
        } 
        
        //frames
        else {
            var colorOptions = sunglassesOptions.frames
            .filter(function(item) {
                return item.color === currColor
            })[0]
            
            var color = colorOptions.color
            var price = colorOptions.price
            var cssClass = colorOptions.cssClass
            
            sunglassesNew = {
                model: {
                    name: sunglassesNew.model.name,
                    price: sunglassesNew.model.price,
                    thumbImg: sunglassesNew.model.price,
                    cssClass: sunglassesNew.model.cssClass,
                },
                lenses: {
                    color: sunglassesNew.lenses.color,
                    price: sunglassesNew.lenses.price,
                    cssClass: sunglassesNew.lenses.cssClass,
                },
                frame: {
                    color: color,
                    price: price,
                    cssClass: cssClass,
                }     
            }
        }

        addHighlight(clickedItem)
        setSunglasses(sunglassesNew)
        render(sunglassesNew)
    }
})

//render(sunglasses)
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
);



import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const PokemonGenerator = () => {
    const [pokemon, setPokemon] = useState(null);

    const fetchRandomPokemon = async () => {
        const randomId = Math.floor(Math.random() * 898) + 1;
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
        const data = await response.json();
        setPokemon(data);
    };

    useEffect(() => {
        fetchRandomPokemon();
    }, []);

    return (
        <div style={{ 
            fontFamily: 'Arial, sans-serif', 
            maxWidth: '300px', 
            margin: '0 auto', 
            textAlign: 'center', 
            padding: '20px', 
            backgroundColor: '#f0f0f0', 
            borderRadius: '10px' 
        }}>
            <h1 style={{ color: '#333' }}>Random Pokemon Generator</h1>
            {pokemon && (
                <div>
                    <img 
                        src={pokemon.sprites.front_default} 
                        alt={pokemon.name} 
                        style={{ width: '150px', height: '150px' }}
                    />
                    <h2 style={{ textTransform: 'capitalize', color: '#444' }}>{pokemon.name}</h2>
                </div>
            )}
            <button 
                onClick={fetchRandomPokemon}
                style={{
                    backgroundColor: '#4CAF50',
                    border: 'none',
                    color: 'white',
                    padding: '15px 32px',
                    textAlign: 'center',
                    textDecoration: 'none',
                    display: 'inline-block',
                    fontSize: '16px',
                    margin: '4px 2px',
                    cursor: 'pointer',
                    borderRadius: '5px'
                }}
            >
                Generate Random Pokemon
            </button>
        </div>
    );
};

ReactDOM.render(<PokemonGenerator />, document.getElementById('root'));
