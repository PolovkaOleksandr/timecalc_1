const inp1=document.querySelector(".inp1")


const inp2=document.querySelector(".inp2")


const btn=document.querySelector(".btn")
btn.addEventListener("click", main)

const p=document.querySelector(".final")

let years=0
let months=0
let days=0




function main() {
    let inv1 = inp1.value.split('.').map(Number);
    let inv2 = inp2.value.split('.').map(Number);
    years=inv2[2]-inv1[2]
    months=inv2[1]-inv1[1]
    days=inv2[0]-inv1[0]
    if (days<0){
        months=months-1
        days=30+days
    }
    if (months<0){
        years=years-1
        months=12+months
    }
    
    
    p.textContent=`${days} днів ${months} місяців ${years} років`
    console.log(inv1, inv2, years)
    console.log(inv2[3],inv1[3])
}