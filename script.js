function encodeResistorColors(ohmsString) {
    const colors = {
     black: 0,
     brown: 1,
     red: 2,
     orange: 3,
     yellow: 4,
     green: 5,
     blue: 6,
     violet: 7,
     gray: 8,
     white: 9 
    }
    let million = false
    let kilo = false
    let meuRetorno = ""
    let array = []
    let terceiraFaixa = ""
    let exp = 0
    if(ohmsString.includes("M")){
      array = ohmsString.split("M")
      million = true
    }else if(ohmsString.includes("k")){
      array = ohmsString.split("k")
      kilo = true
    }else{
      array = ohmsString.split(" ")
    }
    let num = array[0]
    let digit1
    let digit2
    
    if(num.includes(".")){
      digit1 = num.split(".")[0]
      digit2 = num.split(".")[1]
      exp -= 1
    }else if(num.length === 2){
      digit1 = num.split("")[0]
      digit2 = num.split("")[1]
    }else if(parseInt(num) > 99){
      digit1 = num.split("")[0]
      digit2 = num.split("")[1]
      exp += 1
    }else if(parseInt(num) < 10){
      digit1 = num.split("")[0]
      digit2 = "0"
      exp -= 1
    }
    
    digit1 = parseInt(digit1)
    digit2 = parseInt(digit2)
    
    for(let i = 0; i < Object.keys(colors).length; i++){
      if(digit1 === Object.values(colors)[i]){
        digit1 = Object.keys(colors)[i]
      }
      if(digit2 === Object.values(colors)[i]){
        digit2 = Object.keys(colors)[i]
      }
    }
    
    meuRetorno += digit1 + " " + digit2
    
    if(million){
      terceiraFaixa = Object.keys(colors)[6 + exp]
    }else if(kilo){
      terceiraFaixa = Object.keys(colors)[3 + exp]
    }else if(exp === -1){
      terceiraFaixa = "gold"
    }else if(exp === 1){
      terceiraFaixa = "brown"
    }else {
      terceiraFaixa = "black"
    }
    
    meuRetorno += " " + terceiraFaixa + " gold"
    return meuRetorno.split(" ")
}
const primeira = document.getElementById("primeira")
const segunda = document.getElementById("segunda")
const terceira = document.getElementById("terceira")
const quarta = document.getElementById("quarta")

const botao = document.querySelector("button")
const input = document.querySelector("input")

function colorir(){
    let cores = encodeResistorColors(input.value)
    primeira.style.backgroundColor = cores[0]
    segunda.style.backgroundColor = cores[1]
    terceira.style.backgroundColor = cores[2]
    quarta.style.backgroundColor = cores[3]
    input.value = ""

}


botao.addEventListener("click", colorir)