var shows = [
  {
    date: "Mon Dec 17 2018",
    venue: "Ronald Lane",
    location: "San Fancisco, CA"
  },
  {
    date: "Tue Jul 18 2019",
    venue: "Pier 3 East",
    location: "San Fancisco, CA"
  },
  {
    date: "Fri Jul 22 2019",
    venue: "View Loungue",
    location: "San Fancisco, CA"
  },
  {
    date: "Sat Aug 12 2019",
    venue: "Hyatt Agency",
    location: "San Fancisco, CA"
  },
  {
    date: "Fri Sep 05 2019",
    venue: "Moscow Center",
    location: "San Fancisco, CA"
  },
  { date: "Wed Aug 11 2019", venue: "Pres Club", location: "San Fancisco, CA" }
];

function createMobileTable(table, shows) {
  for (var show of shows) {
    for (key in show) {
      var row = table.insertRow();
      var cell = row.insertCell();
      var text = document.createTextNode(key);
      // cell.append(key);
      cell.innerHTML = "<h3 class='key'>" + key + "<h3>";
      var row = table.insertRow();
      var cell = row.insertCell();
      var text = document.createTextNode(show[key]);
      cell.appendChild(text);
      cell.innerHTML = "<h3 class='showText'>" + show[key] + "<h3>";
    }
    var row = table.insertRow();
    var cell = row.insertCell();
    cell.classList.add("showsShow__ticketbox");
    var anc = document.createElement("A");
    anc.href = "#";
    anc.classList.add("showsShow__ticket");
    anc.innerHTML = "BUY TICKETS";
    cell.appendChild(anc);
  }
}
var table = document.querySelector(".mobile-table");
var showKeys = Object.keys(shows[0]);
createMobileTable(table, shows);

var dataKey = document.querySelectorAll(".key");
function keyMargin(array) {
  for (i = 0; i < dataKey.length; i++) {
    if (i % 3 === 0) {
      dataKey[i].classList.add("start");
    }
  }
}
keyMargin(dataKey);

//making the big table --------------------------

function createTable(table, shows) {
  for (var show of shows) {
    var row = table.insertRow();
    row.classList.add("big-table__ticketrow");
    for (key in show) {
      var cell = row.insertCell();
      var text = document.createTextNode(show[key]);
      cell.appendChild(text);
      cell.innerHTML = "<h3 class='bigTable-showText'>" + show[key] + "<h3>";
    }
    var cell = row.insertCell();
    cell.classList.add("big-table__ticket");
    var anc = document.createElement("A");
    anc.href = "#";
    anc.classList.add("showsShow__ticket");
    anc.innerHTML = "BUY TICKETS";
    cell.appendChild(anc);
  }
}

function createTableHead(table, shows) {
  var tHead = table.createTHead();
  var row = tHead.insertRow();
  for (var show of shows) {
    var th = document.createElement("th");
    var text = document.createTextNode(show);
    th.appendChild(text);
    row.appendChild(th);
  }
}

var table = document.querySelector(".big-table");
var showKeys = Object.keys(shows[0]);

createTable(table, shows);
createTableHead(table, showKeys);

//making the show margins
var ticketDemi = document.querySelectorAll(".showText");
function dateDemi(array) {
  for (i = 0; i < ticketDemi.length; i++) {
    if (i % 3 === 0) {
      ticketDemi[i].classList.add("demi");
      ticketDemi[i].classList.add("middle");
    } else if (i === 1 || i % 3 === 1) {
      ticketDemi[i].classList.add("middle");
    } else {
      ticketDemi[i].classList.add("end");
    }
  }
}

var bigTableTicket = document.querySelectorAll(".bigTable-showText");
function bigDateDemi(array) {
  for (i = 0; i < bigTableTicket.length; i++) {
    if (i % 3 === 0) {
      bigTableTicket[i].classList.add("demi");
    }
  }
}

bigDateDemi(bigTableTicket);

var hideMobileTable = document.querySelector(".mobile-table");
var hideBigTable = document.querySelector(".big-table");
var bigTableHead = document.querySelector(".big-table thead");
var bigTableBody = document.querySelector("big-table tbody");
bigTableHead.classList.add("key");
var bigTableUnderline = document.querySelectorAll(".big-table tbody tr");
console.log(bigTableUnderline);
dateDemi(ticketDemi);

function media(x) {
  if (x.matches) {
    hideBigTable.classList.add("hidden");
    hideMobileTable.classList.remove("hidden");
    bigTableHead.classList.add("hidden");
  } else {
    hideMobileTable.classList.add("hidden");
    hideBigTable.classList.remove("hidden");
    bigTableHead.classList.remove("hidden");
  }
}

var x = window.matchMedia("(max-width: 767px)");
media(x);
x.addListener(media);
