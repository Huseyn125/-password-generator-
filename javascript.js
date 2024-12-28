const passwordlengthinput=document.getElementById("password-length")
const includelowercase=document.getElementById("include-lowercase")
const includeuppercase=document.getElementById("include-uppercase")
const includenumbers=document.getElementById("include-numbers")
const includespecial=document.getElementById("include-speacial")
const generatebtn=document.getElementById("generate-btn")
const generatepasswordinput=document.getElementById("generated-password")
const copybtn=document.getElementById("copy-btn")

function generatepassword(){
  const length = parseInt(passwordlengthinput.value)
  const lowercase = 'abcdfghijklmnopqrstuvwxyz'
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const numbers = '0123456789'
  const speacial = '!@#$%^&*()-_=+{}[]|;:,.<>?/'

  let characterpool = ''

  if(includelowercase.checked){
    characterpool+=lowercase
  }
  if(includeuppercase.checked){
    characterpool+=uppercase
  }
  if(includenumbers.checked){
    characterpool+=numbers
  }
  if(includespecial.checked){
    characterpool+=speacial
  }
  if(characterpool === ''){
    alert("Choose one type of symbol !")
    return
  }

  let password = ''
  for(let i = 0;i<length;i++){
    const radmonindex=Math.floor(Math.random()*characterpool.length)
    password+= characterpool[radmonindex]
  }
  generatepasswordinput.value = password
}
function copypassword(){
  generatepasswordinput.select()
  navigator.clipboard.writeText(generatepasswordinput.value)
  alert('Password copied succsessfuly !')
}
generatebtn.addEventListener('click' ,generatepassword)
copybtn.addEventListener('click',copypassword)