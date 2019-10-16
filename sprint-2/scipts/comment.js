var submit = document.querySelector(".comment__send__button");
var commentForm = document.getElementById("comment__form");
var theDate = new Date();
var today =
  theDate.getMonth() + "/" + theDate.getDate() + "/" + theDate.getFullYear();
var c1n = document.getElementById("c1__name");
var c1d = document.getElementById("c1__date");
var c1c = document.getElementById("c1__comment");
var c1p = document.getElementById("c1__pic");
var c2n = document.getElementById("c2__name");
var c2d = document.getElementById("c2__date");
var c2c = document.getElementById("c2__comment");
var c2p = document.getElementById("c2__pic");
var c3n = document.getElementById("c3__name");
var c3d = document.getElementById("c3__date");
var c3c = document.getElementById("c3__comment");
var c3p = document.getElementById("c3__pic");
var avatar = document.getElementById("comment-img");

function comment() {
  event.preventDefault();
  var inputName = document.getElementById("c__send__n").value;
  var inputComment = document.getElementById("c__send__c").value;
  c3d.innerHTML = c2d.innerHTML;
  c3n.innerHTML = c2n.innerHTML;
  c3c.innerHTML = c2c.innerHTML;
  c3p.src = c2p.src;
  c2d.innerHTML = c1d.innerHTML;
  c2n.innerHTML = c1n.innerHTML;
  c2c.innerHTML = c1c.innerHTML;
  c2p.src = c1p.src;
  c1d.innerHTML = today;
  c1n.innerHTML = inputName;
  c1c.innerHTML = inputComment;
  c1p.src = avatar.src;

  commentForm.reset();
}
