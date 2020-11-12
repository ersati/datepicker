

const day = document.querySelector('.day');

const year = document.querySelector('.year')
let days = [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
let daysArray = []
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun' , ' Jul' , 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const years = [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025];

const y = new Date().getFullYear();
const yprev1 = y - 1
const yprev2 = y - 2
const yprev3 = y - 3
const ynext1 = y + 1
const ynext2 = y + 2
const ynext3 = y + 3  
const ynext4 = y + 4

const firstColumn = document.querySelector('.first-column')
const daysUpdate = document.querySelectorAll('.day');

const secondColumn = document.querySelector('.second-column')
const monthsUpdate = document.querySelectorAll('.month')

const thirdColumn = document.querySelector('.third-column')
const yearUpdate = document.querySelectorAll('.year');

let i = 0
let clientY
let yearIndex = 2015
let monthIndex = 5 ; 
let daysinmonth = dateFns.getDaysInMonth(new Date(yearIndex, monthIndex))

let press = false;
let flage = false
daysUpdate.forEach((el,i) =>{
    el.textContent = i++
})



monthsUpdate.forEach((el, i ) =>{
    el.textContent = months[++i]
})


yearUpdate.forEach((el, i)=>{
    el.textContent = years[++i]
})

function monthUp () {
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
    if(monthIndex > 11){
        monthIndex = 0
    }
    console.log(monthIndex)
}

function monthDown () {
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
    if(monthIndex < 0 ){
        monthIndex = months.length
    }
    console.log(monthIndex)
}
//mouse

firstColumn.addEventListener('mousedown', (e) => {
    clientY = parseInt(e.clientY / 10)
    press = true
    console.log('ok')
console.log(clientY)
console.log(days.length)
    console.log(daysinmonth !== days.length)
daysArray = []
    if(daysinmonth !== days.length) {
        for(let i = 0; i < daysinmonth; i++){
            daysArray.push(i + 1)
        }
        days.splice(0, days.length, ...daysArray)
        console.log(daysArray)
    }
})

firstColumn.addEventListener('mousemove', (e) => {
    if(press){

        let start = (parseInt(e.clientY / 10))
 
        if(clientY > start ){
            i++
            if(i == days.length){
                i=0; 
            }
            daysUpdate[0].textContent = days[i ]
            daysUpdate[1].textContent = days[i +1]
            daysUpdate[2].textContent = days[i +2]
            daysUpdate[3].textContent = days[i +3]
            daysUpdate[4].textContent = days[i +4]
            daysUpdate[5].textContent = days[i +5]
            daysUpdate[6].textContent = days[i +6]  
           
            daysinmonth = dateFns.getDaysInMonth(new Date(yearIndex, monthIndex)) 
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
    }
    
    })
    firstColumn.addEventListener("mouseup", (e) =>{
        press = false
    })





    secondColumn.addEventListener('mousedown', (e) => {
        clientY = parseInt(e.clientY / 10)
    press = true
    })
    secondColumn.addEventListener('mousemove', (e) => {
        e.preventDefault()
        
        if(press){
        let start = (parseInt(e.clientY / 10))
        if(clientY > start ){
            // i++
            // if(i == months.length || i > months.length){
            //     i=0; 
            // }
            // // day.textContent = days[i];
            // monthsUpdate[0].textContent = months[i ]
            // monthsUpdate[1].textContent = months[i +1]
            // monthsUpdate[2].textContent = months[i +2]
            // monthsUpdate[3].textContent = months[i +3]
            // monthsUpdate[4].textContent = months[i +4]
            // monthsUpdate[5].textContent = months[i +5]
            // monthsUpdate[6].textContent = months[i +6]
            // monthsUpdate[7].textContent = months[i +7]  
            // monthIndex = parseInt(i + 4)
            // if(monthIndex > 11){
            //     monthIndex = 0
            // }
            // console.log(monthIndex)
flage = true;
            // monthUp()
    
        }
        else if(clientY < start){
            // i--
            // if(i == 0 || i < 0){
            //     i=months.length;
            // }
            // monthsUpdate[0].textContent = months[i ]
            // monthsUpdate[1].textContent = months[i -1]
            // monthsUpdate[2].textContent = months[i -2]
            // monthsUpdate[3].textContent = months[i -3]
            // monthsUpdate[4].textContent = months[i -4]
            // monthsUpdate[5].textContent = months[i -5]
            // monthsUpdate[6].textContent = months[i -6]
            // monthsUpdate[7].textContent = months[i -7]
            // monthIndex = parseInt(i - 4)
            // if(monthIndex < 0 ){
            //     monthIndex = months.length
            // }
            // console.log(monthIndex)
flage = false;
            // monthDown()
        }}
        })

        secondColumn.addEventListener("mouseup", (e) =>{
            press = false;
            if(flage){
                monthUp()
            } else {
                monthDown()
            }
        })
    
        thirdColumn.addEventListener('mousedown', (e) => {
            clientY = parseInt(e.clientY / 10)
    press = true
        })
        thirdColumn.addEventListener('mousemove', (e) => {
            if(press){
                let start = (parseInt(e.clientY / 10))
         
            if(clientY > start ){
                i++
               
                yearUpdate[0].textContent = yprev3 + i
                yearUpdate[1].textContent = yprev2 + i
                yearUpdate[2].textContent = yprev1 + i
                yearUpdate[3].textContent = y + i
                yearUpdate[4].textContent = ynext1 + i
                yearUpdate[5].textContent = ynext2 + i
                yearUpdate[6].textContent =  ynext3 + i
                yearUpdate[7].textContent =  ynext4 + i
    
            yearIndex = yearUpdate[3].textContent
           
            }
            else if(clientY < start){
                i--
               
                yearUpdate[0].textContent = yprev3 - i
                yearUpdate[1].textContent = yprev2 - i
                yearUpdate[2].textContent = yprev1 - i
                yearUpdate[3].textContent = y - i
                yearUpdate[4].textContent = ynext1 - i
                yearUpdate[5].textContent = ynext2 - i
                yearUpdate[6].textContent =  ynext3 - i
                yearUpdate[7].textContent =  ynext4 - i
    
             
                yearIndex = yearUpdate[3].textContent
                  
            }
        }
            })

            thirdColumn.addEventListener("mouseup", (e) =>{
                press = false
            })

//touch
firstColumn.addEventListener('touchstart', (e) => {
    clientY = parseInt(e.touches[0].clientY / 10)
console.log(daysinmonth)
console.log(days.length)
    console.log(daysinmonth !== days.length)
daysArray = []
    if(daysinmonth !== days.length) {
        for(let i = 0; i < daysinmonth; i++){
            daysArray.push(i + 1)
        }
        days.splice(0, days.length, ...daysArray)
        console.log(daysArray)
    }
})
firstColumn.addEventListener('touchmove', (e) => {
    
    let start = (parseInt(e.touches[0].clientY / 10))
 
    if(clientY > start ){
        i++
        if(i == days.length){
            i=0; 
        }
        daysUpdate[0].textContent = days[i ]
        daysUpdate[1].textContent = days[i +1]
        daysUpdate[2].textContent = days[i +2]
        daysUpdate[3].textContent = days[i +3]
        daysUpdate[4].textContent = days[i +4]
        daysUpdate[5].textContent = days[i +5]
        daysUpdate[6].textContent = days[i +6]  
         
        // for(let j = 0; j < daysUpdate.length; j++){
        //     daysUpdate[j].textContent = days[j]
        // }

        console.log(yearIndex, monthIndex)
        daysinmonth = dateFns.getDaysInMonth(new Date(yearIndex, monthIndex))
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
        if(monthIndex > 11){
            monthIndex = 0
        }
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
        if(monthIndex < 0 ){
            monthIndex = months.length
        }
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
           
            yearUpdate[0].textContent = yprev3 + i
            yearUpdate[1].textContent = yprev2 + i
            yearUpdate[2].textContent = yprev1 + i
            yearUpdate[3].textContent = y + i
            yearUpdate[4].textContent = ynext1 + i
            yearUpdate[5].textContent = ynext2 + i
            yearUpdate[6].textContent =  ynext3 + i
            yearUpdate[7].textContent =  ynext4 + i

        yearIndex = yearUpdate[3].textContent
       
        }
        else if(clientY < start){
            i--
           
            yearUpdate[0].textContent = yprev3 - i
            yearUpdate[1].textContent = yprev2 - i
            yearUpdate[2].textContent = yprev1 - i
            yearUpdate[3].textContent = y - i
            yearUpdate[4].textContent = ynext1 - i
            yearUpdate[5].textContent = ynext2 - i
            yearUpdate[6].textContent =  ynext3 - i
            yearUpdate[7].textContent =  ynext4 - i

         
            yearIndex = yearUpdate[3].textContent
              
        }
        })
    

     