/**
 * Created by bensmith on 2/19/15.
 */

var date = new Date();
var day = date.getDay();

var title = document.getElementById("dayH");
var times = [
am800 = document.getElementById("am800"),
am830 = document.getElementById("am830"),
am900 = document.getElementById("am900"),
am930 = document.getElementById("am930"),
am1000 = document.getElementById("am1000"),
am1030 = document.getElementById("am1030"),
am1100 = document.getElementById("am1100"),
am1130 = document.getElementById("am1130"),
pm1200 = document.getElementById("pm1200"),
pm1230 = document.getElementById("pm1230"),
pm100 = document.getElementById("pm100"),
pm130 = document.getElementById("pm130"),
pm200 = document.getElementById("pm200"),
pm230 = document.getElementById("pm230"),
pm300 = document.getElementById("pm300"),
pm330 = document.getElementById("pm330"),
pm400 = document.getElementById("pm400"),
pm430 = document.getElementById("pm430"),
pm500 = document.getElementById("pm500"),
pm530 = document.getElementById("pm530"),
pm600 = document.getElementById("pm600"),
pm630 = document.getElementById("pm630"),
pm700 = document.getElementById("pm700"),
pm730 = document.getElementById("pm730"),
pm800 = document.getElementById("pm800"),
pm830 = document.getElementById("pm830"),
pm900 = document.getElementById("pm900"),
pm930 = document.getElementById("pm930")
];

function clear(){
    times.forEach(function cFromatt(t){
        t.setAttribute("rowspan", "1");
        t.innerHTML = "";
    });
}

function incrementDay(){
    day += 1;
    if (day > 6) day = 0;
    clear();
    reload();
}
function decrementDay(){
    day -= 1;
    if(day < 0) day = 6;
    clear();
    reload();
}

function reload(){
    switch (day){
        case 0:         //Sunday
            document.getElementById("dayH").innerHTML = "Sunday";
            am800.setAttribute("rowspan", "28");
            am800.innerHTML = "No Programming";
            break;
        case 1:         //Monday
            title.innerHTML = "Monday";
            am800.setAttribute("rowspan", "2");
            am800.innerHTML = "<a href=\"http://www.usu.edu/radio/index.php/homepage/aggie_morning_word/\" ><img src=\"Breakfast.jpg\" alt=\"Aggie Morning Word\" width=\"150\" height=\"50\"/></a>";
            am900.setAttribute("rowspan", "2");
            am900.innerHTML = "Monday Morning Musings";
            am1000.setAttribute("rowspan", "6");
            am1000.innerHTML = "";
            pm100.setAttribute("rowspan", "2");
            pm100.innerHTML = "Kaleb Stanton";
            pm200.setAttribute("rowspan", "2");
            pm200.innerHTML = "Stephen Brown";
            pm300.setAttribute("roswapn", "2");
            pm300.innerHTML = "Julia Lisle";
            pm400.setAttribute("rowspan", "2");
            pm400.innerHTML = "Jessica and Jenifer";
            pm500.setAttribute("rowspan", "2");
            pm500.innerHTML = "Mallory Rogers";
            pm600.setAttribute("rowspan", "2");
            pm600.innerHTML = "Andrew Waibel";
            pm700.setAttribute("rowspan", "6");
            break;
        case 2:         //Tuesday
            document.getElementById("dayH").innerHTML = "Tuesday";
            am800.setAttribute("rowspan", "2");
            am800.innerHTML = "<a href=\"http://www.usu.edu/radio/index.php/homepage/aggie_morning_word/\" ><img src=\"Breakfast.jpg\" alt=\"Aggie Morning Word\" width=\"150\" height=\"50\"/></a>";
            am900.setAttribute("rowspan", "6");
            am900.innerHTML = "";
            pm1200.setAttribute("rowspan", "2");
            pm1200.innerHTML = "Jonathan Woodall";
            pm100.setAttribute("rowspan", "2");
            pm100.innerHTML = "Ember Bradbury";
            pm200.setAttribute("rowspan", "2");
            pm200.innerHTML = "Summer and Winter";
            pm300.setAttribute("rowspan", "2");
            pm300.innerHTML = "";
            pm400.setAttribute("rowspan", "4");
            pm400.innerHTML = "<a href=\"http://www.usu.edu/radio/index.php/the-non-traditional/\"><img src=\"http://www.usu.edu/radio/wp-content/uploads/2014/10/dummy-600x300-Eye.jpg\" height=\"150\" width=\"150\" alt=\"The Non-Traditional Show\" title=\"The Non-Traditional Show\" /></a>"
            pm600.setAttribute("rowspan", "2");
            pm600.innerHTML = "Adventures of M&L";
            pm700.setAttribute("rowspam", "2");
            pm700.innerHTML = "Aggie Radio Staff Meeting";
            pm800.setAttribute("rowspan", "4");
            pm800.innerHTML = "Joseph P. Blues/Folk";
            break;
        case 3:         //Wednesday
            document.getElementById("dayH").innerHTML = "Wednesday";
            am800.setAttribute("rowspan", "6");
            am800.innerHTML = "<a href=\"http://www.usu.edu/radio/index.php/homepage/aggie_morning_word/\" ><img src=\"Breakfast.jpg\" alt=\"Aggie Morning Word\" width=\"150\" height=\"50\"/></a>";
            am1100.setAttribute("rowspan", "4");
            am1100.innerHTML = "Live From Common Hour";
            pm100.setAttribute("rowspan", "2");
            pm100.innerHTML = "Allie G. & Tara B.";
            pm200.setAttribute("rowspan", "2");
            pm200.innerHTML = "Susie Clegg";
            pm300.setAttribute("rowspan", "2");
            pm300.innerHTML = "J Squared";
            pm400.innerHTML = "World Music";
            pm430.innerHTML = "Sarah Sloan";
            pm500.setAttribute("rowspan", "2");
            pm500.innerHTML = "Spencer Herzog";
            pm600.setAttribute("rowspan", "2");
            pm600.innerHTML = "Andrew Waibel";
            pm700.setAttribute("rowspan", "6");
            break;
        case 4:         //Thursday
            document.getElementById("dayH").innerHTML = "Thursday";
            am800.setAttribute("rowspan", "2");
            am800.innerHTML = "<a href=\"http://www.usu.edu/radio/index.php/homepage/aggie_morning_word/\" ><img src=\"Breakfast.jpg\" alt=\"Aggie Morning Word\" width=\"150\" height=\"50\"/></a>";
            am900.setAttribute("rowspan", "4");
            am1100.setAttribute("rowspan", "2");
            am1100.innerHTML = "Kaden D. & Dylan M.";
            pm1200.setAttribute("rowspan", "4");
            pm1200.innerHTML = "Music Rotation Maintenance";
            pm200.setAttribute("rowspan", "2");
            pm300.setAttribute("rowspan", "2");
            pm300.innerHTML = "Omima";
            pm400.setAttribute("rowspan", "2");
            pm400.innerHTML = "Aggies Going Green";
            pm500.innerHTML = "Tune In";
            pm530.setAttribute("rowspan", "3");
            pm530.innerHTML = "Men in Blue";
            pm700.setAttribute("rowspan", "4");
            pm700.innerHTML = "Weird Socks Hip Hop";
            break;
        case 5:         //Friday
            document.getElementById("dayH").innerHTML = "Friday";
            am800.setAttribute("rowspan", "2");
            am800.innerHTML = "AMW or Aggventure, Idfk";
            am900.innerHTML = "Transient Cafe";
            am930.innerHTML = "Life in the Rainbow";
            am1000.setAttribute("rowspan", "2");
            am1000.innerHTML = "Cheers to the Freaking Weekend";
            am1100.setAttribute("rowspan", "2");
            am1100.innerHTML = "Frid-A Show";
            pm1200.setAttribute("rowspan", "2");
            pm1200.innerHTML = "<a href=\"http://www.usu.edu/radio/index.php/popcorn-culture/\"><img src=\"http://www.usu.edu/radio/wp-content/uploads/2014/06/PopcornCulture.jpg\" width=\"150\" height=\"50\" alt=\"Popcorn Culture\" title=\"Popcorn Culture\" /></a>";
            pm100.setAttribute("rowspan", "2");
            pm100.innerHTML = "Ian Pougher";
            pm200.setAttribute("rowspan", "2");
            pm200.innerHTML = "Maddy";
            pm400.setAttribute("rowspan", "2");
            pm400.innerHTML = "Tyler Staheli";
            pm500.setAttribute("rowspan", "2");
            pm500.innerHTML = "Good Question";
            pm600.setAttribute("rowspan", "2");
            pm600.innerHTML = "Emily Duke";
            pm700.setAttribute("rowspan", "4");
            pm700.innerHTML = "Friday Night Date Night";
            break;
        case 6:         //Saturday
            document.getElementById("dayH").innerHTML = "Saturday";
            am800.setAttribute("rowspan", "4");
            am1000.setAttribute("rowspan", "2");
            am1000.innerHTML = "Taylor & Tyler";
            am1100.setAttribute("rowspan", "2");
            am1100.innerHTML = "History of Rock";
            pm1200.setAttribute("rowspan", "4");
            pm200.setAttribute("rowspan", "2");
            pm200.innerHTML = "Michael";
            pm300.setAttribute("rowspan", "2");
            pm300.innerHTML = "Griffin Dubanowich";
            pm400.setAttribute("rowspan", "2");
            pm400.innerHTML = "Nerd Fighter Radio";
            pm500.setAttribute("rowspan", "10");
            break;

    }
}