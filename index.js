

const day = document.querySelector('.day');

const year = document.querySelector('.year')
const days = [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun' , ' Jul' , 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const years = [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025];

const y = 2020
const firstColumn = document.querySelector('.first-column')
const daysUpdate = document.querySelectorAll('.day');

const secondColumn = document.querySelector('.second-column')
const monthsUpdate = document.querySelectorAll('.month')

const thirdColumn = document.querySelector('.third-column')
const yearUpdate = document.querySelectorAll('.year');

let i = 0
let clientY
let yearIndex;
let monthIndex; 
let daysinmonth = dateFns.getDaysInMonth(new Date(yearIndex, monthIndex))

daysUpdate.forEach((el,i) =>{
    el.textContent = i++
})



monthsUpdate.forEach((el, i ) =>{
    el.textContent = months[++i]
})


yearUpdate.forEach((el, i)=>{
    el.textContent = years[++i]
})





firstColumn.addEventListener('touchstart', (e) => {
    clientY = parseInt(e.touches[0].clientY / 10)
})
firstColumn.addEventListener('touchmove', (e) => {
    
    let start = (parseInt(e.touches[0].clientY / 10))
 
    if(clientY > start ){
        i++
        if(i == days.length){
            i=0; 
        }
        // daysUpdate[0].textContent = days[i ]
        // daysUpdate[1].textContent = days[i +1]
        // daysUpdate[2].textContent = days[i +2]
        // daysUpdate[3].textContent = days[i +3]
        // daysUpdate[4].textContent = days[i +4]
        // daysUpdate[5].textContent = days[i +5]
        // daysUpdate[6].textContent = days[i +6]  
         
        for(let j = 0; j < daysUpdate.length; j++){
            daysUpdate[j].textContent = days[j]
        }
        console.log(daysinmonth)
        
// for (let i = 0; i < daysUpdate.length; i++){
//     // daysUpdate[i].style.opacity = `0`;
//         daysUpdate[i].style.transition = 'all .75s';
//         daysUpdate[i].style.transform =  `translateY(-50px)`;
// }
        
    }
    else if(clientY < start){
        i--
        if(i == 0){
            i=days.length;
        }
        daysUpdate[0].textContent = days[i ]
        daysUpdate[1].textContent = days[i -1]
        daysUpdate[2].textContent = days[i -2]
        daysUpdate[3].textContent = days[i -3]
        daysUpdate[4].textContent = days[i -4]
        daysUpdate[5].textContent = days[i -5]
        daysUpdate[6].textContent = days[i -6]
    }
    })


// firstColumn.addEventListener('touchend', (e) => {
//     for (let i = 0; i < daysUpdate.length; i++){
//         // daysUpdate[i].style.opacity = `1`;
//             daysUpdate[i].style.transition = 'all .75s';
//             daysUpdate[i].style.transform =  `translateY(0px)`;
//     }
         
// })
secondColumn.addEventListener('touchstart', (e) => {
    clientY = parseInt(e.touches[0].clientY / 10)
})
secondColumn.addEventListener('touchmove', (e) => {
    
    let start = (parseInt(e.touches[0].clientY / 10))
 

    if(clientY > start ){
        i++
        if(i == months.length || i > months.length){
            i=0; 
        }
        // day.textContent = days[i];
        monthsUpdate[0].textContent = months[i ]
        monthsUpdate[1].textContent = months[i +1]
        monthsUpdate[2].textContent = months[i +2]
        monthsUpdate[3].textContent = months[i +3]
        monthsUpdate[4].textContent = months[i +4]
        monthsUpdate[5].textContent = months[i +5]
        monthsUpdate[6].textContent = months[i +6]
        monthsUpdate[7].textContent = months[i +7]  
        monthIndex = parseInt(i + 4)
        console.log(monthIndex)
    }
    else if(clientY < start){
        i--
        if(i == 0 || i < 0){
            i=months.length;
        }
        monthsUpdate[0].textContent = months[i ]
        monthsUpdate[1].textContent = months[i -1]
        monthsUpdate[2].textContent = months[i -2]
        monthsUpdate[3].textContent = months[i -3]
        monthsUpdate[4].textContent = months[i -4]
        monthsUpdate[5].textContent = months[i -5]
        monthsUpdate[6].textContent = months[i -6]
        monthsUpdate[7].textContent = months[i -7]
        monthIndex = parseInt(i - 4)
        console.log(monthIndex)
    }
    })

    thirdColumn.addEventListener('touchstart', (e) => {
        clientY = parseInt(e.touches[0].clientY / 10)
    })
    thirdColumn.addEventListener('touchmove', (e) => {
        
        let start = (parseInt(e.touches[0].clientY / 10))
     
        if(clientY > start ){
            i++
            if(i == years.length){
                i=0; 
            }
        yearUpdate[0].textContent = years[i  ]
        yearUpdate[1].textContent = years[i + 1]
        yearUpdate[2].textContent = years[i + 2]
        yearUpdate[3].textContent = years[i + 3]
        yearUpdate[4].textContent = years[i + 4]
        yearUpdate[5].textContent = years[i + 5]
        yearUpdate[6].textContent =  years[i + 6]
        yearUpdate[7].textContent =  years[i + 7]
        yearIndex = parseInt(years[i + 4])
        console.log(yearIndex)
        }
        else if(clientY < start){
            i--
            if(i == 0){
                i=years.length;
            }
            yearUpdate[0].textContent = years[i  ]
            yearUpdate[1].textContent = years[i - 1]
            yearUpdate[2].textContent = years[i - 2]
            yearUpdate[3].textContent = years[i - 3]
            yearUpdate[4].textContent = years[i - 4]
            yearUpdate[5].textContent = years[i - 5]
            yearUpdate[6].textContent =  years[i - 6]
            yearUpdate[7].textContent =  years[i - 7]
            yearIndex = parseInt(years[i - 4])
            console.log(yearIndex)
        }
        })
    

        var dayss = function(month,year) {
            return new Date(year, month, 0).getDate();
         };
         document.write("Days in July: "+dayss(7, 2012)); // July month
         document.write("<br>Days in September: "+dayss(9, 2012)); 