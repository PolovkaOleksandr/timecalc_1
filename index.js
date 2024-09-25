const inp11=document.querySelector(".inp11")
const inp12=document.querySelector(".inp12")
const inp13=document.querySelector(".inp13")

const inp21=document.querySelector(".inp21")
const inp22=document.querySelector(".inp22")
const inp23=document.querySelector(".inp23")

const btn=document.querySelector(".btn")
btn.addEventListener("click", main)

const p=document.querySelector(".final")

let years=0
let months=0
let days=0

function main() {
    years=inp23.value-inp13.value
    months=inp22.value-inp12.value
    days=inp21.value-inp11.value
    if (months<0){
        years=years-1
        months=months+12
    }
    if (days<0){
        months=months-1
        days=days+30
    }
    p.textContent=`${days} днів ${months} місяців ${years} років`
}