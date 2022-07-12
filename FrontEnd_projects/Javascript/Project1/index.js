let age=Number(prompt("Enter your age:"))

if(age>=18&&age<=60){
    alert("Please Answer few more questions")
    let sugar=prompt("Do you have Sugar - say yes or no:")
let bp=prompt("Do you have BP - say yes or no:")
if(bp=="yes"||sugar=="yes"){  
    alert("You are not elgible because of Sugar/BP")
}
else{
    let surgery=prompt("Have you undergone any surgery in the last 1 year - say yes or no")
    if(surgery=="yes"){
alert("You are not elgible because of surgery")
    }
    else{
        alert("You are eligible to take vaccination")
    }
}
}
    else{
        alert("You are not eligible because of age limit")
    }