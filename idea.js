   var dayss = function(month,year) {
            return new Date(year, month, 0).getDate();
         };
         document.write("Days in July: "+dayss(7, 2012)); // July month
         document.write("<br>Days in September: "+dayss(9, 2012)); 