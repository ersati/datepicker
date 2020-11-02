const day = document.querySelector('.day');
const month = document.querySelector('.month');
const year = document.querySelector('.year')
const days = [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
const months = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
const years = [2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023,2024,2025];


day.textContent = days[0];
month.textContent = months[0]
year.textContent = years[5]