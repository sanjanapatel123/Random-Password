const upperSet = 'ABCDEFGHIJKLIMNOPQRSTUVWXYZ';
const lowerSet = 'abcdefghijklimnopqrstuvwxyz';
const numberSet = '1234567890';
const symboleSet = "!@#$%^&*()_+/";

//selector
const passBox =  document.querySelector("#pass-box");
const totalChar = document.getElementById("total-char");
const upperInput = document.querySelector("#upper-case");
const lowerInput =  document.querySelector("#lower-case");
const numberInput = document.querySelector("#numbers");
const symboleInput = document.querySelector("#symbols");
const btn = document.querySelector('.btn');
const getRandomData = (dataSet)=>{
return dataSet[Math.floor(Math.random() * dataSet.length)]
}

const generatePassword=(password = '')=>{
if(upperInput.checked){
   let ans= password += getRandomData(upperSet); 
}
if(lowerInput.checked){
   let ans= password += getRandomData(lowerSet); 
}
if(numberInput.checked){
   let ans= password += getRandomData(numberSet); 
}
if(symboleInput.checked){
   let ans= password += getRandomData(symboleSet); 
}
if(password.length<=totalChar.value){
    return generatePassword(password);
}
passBox.innerText=truncateString(password,totalChar.value);
}
generatePassword();
btn.addEventListener("click",()=>{
    generatePassword();
})
function truncateString(str,num){
    if(str.length >num){
        let subStr = str.substring(0,num);
        return subStr;
    }
    else{
        return str;
    }
}