const day = document.querySelector('.day');
const month = document.querySelector('.month');
const year = document.querySelector('.year')
const days = [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
const years = [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025];
const left = document.querySelector('.left');
const right = document.querySelector('.right')

let i = 0
day.textContent = days[i];
month.textContent = months[0]
year.textContent = years[5]

left.addEventListener('click', () => {
i--
day.textContent = days[i];
})
let clientY

right.addEventListener('click', () => {
    i++
    day.textContent = days[i];
    })

day.addEventListener('touchstart', (e) => {
    day.textContent = days[5]
    clientY = e.touches[0].clientY 
})
day.addEventListener('touchmove', (e) => {
    
    let start = e.touches[0].clientX

    if(clientY > e.touches[0].clientY ){
        i++
        day.textContent = days[i];
        console.log('gora')
    }
    else {
        i--
        day.textContent = days[i];
        console.log('dol')
    }
console.log()
    })