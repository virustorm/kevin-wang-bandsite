var submit = document.querySelector(".comment__send__button");
var commentForm = document.getElementById("comment__form");
var theDate = new Date();
var today =
  theDate.getMonth() + "/" + theDate.getDate() + "/" + theDate.getFullYear();

var comments = [
  {
    name: "Micheal Lyons",
    date: "12/18/2018",
    src: "",
    alt: "",
    comment:
      "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."
  },
  {
    name: "Gary Wong",
    date: "12/12/2018",
    src: "",
    alt: "",
    comment:
      "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"
  },
  {
    name: "Theodore Duncan",
    date: "11/15/2018",
    src: "",
    alt: "",
    comment:
      "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!"
  }
];

function updateComment() {
  event.preventDefault();
  let nameInput = document.getElementById("c__send__n").value;
  let commentInput = document.getElementById("c__send__c").value;
  let imgInput = document.getElementById("comment-img").src;

  let comment = {};
  comment.name = nameInput;
  comment.date = today;
  comment.src = imgInput;
  comment.comment = commentInput;

  comments.unshift(comment);

  commentForm.reset();
  console.log(comments);

  c3d.innerHTML = Object([comments[2].date]);
  c3n.innerHTML = Object([comments[2].name]);
  c3c.innerHTML = Object([comments[2].comment]);
  c3p.src = Object([comments[2].src]);
  c2d.innerHTML = Object([comments[1].date]);
  c2n.innerHTML = Object([comments[1].name]);
  c2c.innerHTML = Object([comments[1].comment]);
  c2p.src = Object([comments[1].src]);
  c1d.innerHTML = today;
  c1n.innerHTML = Object([comments[0].name]);
  c1c.innerHTML = Object([comments[0].comment]);
  c1p.src = Object([comments[0].src]);
}

function CommentInput(div) {
  var inputMainBox = document.createElement("div");
  inputMainBox.classList.add("comment__send");

  var inputAvatar = document.createElement("img");
  inputAvatar.id = "comment-img";
  inputAvatar.classList.add("comment__pic");
  inputAvatar.src = "assets/Images/Mohan-muruge.jpg";
  inputMainBox.appendChild(inputAvatar);

  var formBox = document.createElement("div");
  formBox.classList.add("comment__send-box");

  var inputForm = document.createElement("form");
  inputForm.id = "comment__form";
  var inputNameHead = document.createElement("h5");
  inputNameHead.classList.add("comment__send__name-head");
  var text = document.createTextNode("name");
  inputNameHead.appendChild(text);

  var inputName = document.createElement("input");
  inputName.type = "text";
  inputName.name = "theName";
  inputName.id = "c__send__n";
  inputName.classList.add("comment__send__name");
  inputName.placeholder = "Name";

  var inputCommentHead = document.createElement("h5");
  inputCommentHead.classList.add("comment__send__comment-head");
  var text = document.createTextNode("comment");
  inputCommentHead.appendChild(text);

  var inputCommentBox = document.createElement("input");
  inputCommentBox.type = "text";
  inputCommentBox.name = "theComment";
  inputCommentBox.id = "c__send__c";
  inputCommentBox.classList.add("comment__send__comment");
  inputCommentBox.placeholder = "Add a New Comment";

  var submitBox = document.createElement("div");
  submitBox.classList.add("comment__send__comment-box");

  var inputSubmit = document.createElement("input");
  inputSubmit.classList.add("comment__send__button");
  inputSubmit.type = "submit";
  inputSubmit.value = "comment";
  submitBox.appendChild(inputSubmit);

  inputForm.appendChild(inputNameHead);
  inputForm.appendChild(inputName);
  inputForm.appendChild(inputCommentHead);
  inputForm.appendChild(inputCommentBox);
  inputForm.appendChild(submitBox);
  formBox.appendChild(inputForm);
  inputMainBox.appendChild(formBox);
  div.appendChild(inputMainBox);
}

var inputComment = document.getElementById("comment__input");
CommentInput(inputComment);

function createDefault(div, comments) {
  for (i = 0; i < 4; i++) {
    var avatarBody = document.createElement("div");
    avatarBody.classList.add("comment__c__body");
    avatarBody.classList.add("comment-c-body");
    var avatar = document.createElement("img");
    avatar.classList.add("comment__c__img");
    avatar.classList.add("comment-img");
    avatar.src = comments[i].src;
    avatar.alt = comments[i].alt;
    avatarBody.appendChild(avatar);
    // div.appendChild(avatarBody);

    var subBody = document.createElement("div");
    subBody.classList.add("comment__c__textbody");

    var comBody = document.createElement("div");
    comBody.classList.add("comment__c__textbody__heading");
    var cName = document.createElement("h5");
    cName.classList.add("comment__c__name");
    var cDate = document.createElement("h5");
    cDate.classList.add("comment__c__date");
    var text = document.createTextNode(comments[i].name);
    cName.appendChild(text);
    var text = document.createTextNode(comments[i].date);
    cDate.appendChild(text);
    comBody.appendChild(cName);
    comBody.appendChild(cDate);
    subBody.appendChild(comBody);
    // div.appendChild(comBody);

    var body = document.createElement("div");
    body.classList.add("comment__c__textbody__body");
    var cComment = document.createElement("h5");
    var text = document.createTextNode(comments[i].comment);
    cComment.appendChild(text);
    body.appendChild(cComment);
    subBody.appendChild(body);
    avatarBody.appendChild(subBody);
    div.appendChild(avatarBody);
    // div.appendChild(body);
    // div.appendChild(subBody);
  }
}

var deafultComment = document.getElementById("comment__default");
createDefault(deafultComment, comments);
