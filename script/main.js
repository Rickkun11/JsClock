let clockWork = () => {
    //get now date
    let getTimeFromDate = new Date();
    let getDate = new Date();

    //get time
    let hours = getTimeFromDate.getHours();
    let minutes = getTimeFromDate.getMinutes();
    let seconds = getTimeFromDate.getSeconds();

    let section = document.getElementById("section");
    let dateFormater = document.getElementById("dateFormater");

    //replace HTML DOM into javascript function

    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTMl = minutes;
    document.getElementById('seconds').innerHTML = seconds;
    document

    //set section AM/PM format
    hours >=12 ? section.innerHTML = "PM" : section.innerHTML = "AM";
    hours > 12 ? hours = hours - 12 : "";

    //adding date format day , dd/mm/yy
    const weekday = ["Minggu","Senin","Selasa","Rabu","Kamis","Jum'at","Sabtu"];
    const d = new Date();
    let day = weekday[d.getDay()];

    //display all date format to DOM
    let displayDate = day +" "+ getDate.getDay()+"/"+getDate.getMonth()+"/"+getDate.getFullYear();
    dateFormater.innerHTML = displayDate;


}
setInterval(clockWork,10);