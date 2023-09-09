const monthsList = ["jan", "feb", "march", "april", "may", "june", "july", "aug", "sept", "oct", 
    "nov", "dec"];

var daysList = [31, 28, 31, 30, 31, 30, 31, 31, 30 , 31, 30, 31]
    


function loadRows() {
    let schedule = document.querySelector("table");

    for (let dates=28; dates > 0; dates--) {
        let newRow = schedule.insertRow(1);
        let className = "row" + dates;
        newRow.classList.add(className);

        for (let months=0; months <= 11; months++) {
            let newDate = document.createElement('td');
            let task = document.createElement('td');

            newDate.innerHTML = dates;
            newDate.classList.add(monthsList[months]);

            task.innerHTML = "";
            task.classList.add("task");

            newRow.appendChild(newDate);
            newRow.appendChild(task);
        }
        
    }
}


function colourWeekends() {
    var rowNo = 0;

    document.querySelector(".row1 .jan").style.backgroundColor = "aliceblue"; 
    document.querySelector(".row1 .jan + td").style.backgroundColor = "aliceblue";
    
    var firstWeekend = 7;

    for (let i = 0; i < 12; i++) {
        for (rowNo = firstWeekend; rowNo <= daysList[i]; rowNo+=6) {
            console.log(firstWeekend);
            let theRow = ".row"+rowNo+" ."+monthsList[i];
            document.querySelector(theRow).style.backgroundColor = "aliceblue";
            theRow = ".row"+rowNo+" ." + monthsList[i] +" + td";
            document.querySelector(theRow).style.backgroundColor = "aliceblue";
            rowNo++;  
            theRow = ".row"+rowNo+" ."+monthsList[i];
            document.querySelector(theRow).style.backgroundColor = "aliceblue";
            theRow = ".row"+rowNo+" ." + monthsList[i] +" + td";
            document.querySelector(theRow).style.backgroundColor = "aliceblue";
        }

        rowNo = rowNo - 6;
        remainingDays = daysList[i] - rowNo;
        firstWeekend = 6 - remainingDays;
    }

    


    
}