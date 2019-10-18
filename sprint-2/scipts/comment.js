var submit = document.querySelector(".comment__send__button");
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

function CommentInput(div) {
  let inputMainBox = document.createElement("div");
  inputMainBox.classList.add("comment__send");

  let inputAvatar = document.createElement("img");
  inputAvatar.id = "comment-img";
  inputAvatar.classList.add("comment__pic");
  inputAvatar.src = "assets/Images/Mohan-muruge.jpg";
  inputMainBox.appendChild(inputAvatar);

  let formBox = document.createElement("div");
  formBox.classList.add("comment__send-box");

  let inputForm = document.createElement("form");
  inputForm.id = "comment__form";
  let inputNameHead = document.createElement("h5");
  inputNameHead.classList.add("comment__send__name-head");
  var text = document.createTextNode("name");
  inputNameHead.appendChild(text);

  let inputName = document.createElement("input");
  inputName.type = "text";
  inputName.name = "theName";
  inputName.id = "c__send__n";
  inputName.classList.add("comment__send__name");
  inputName.placeholder = "Name";

  let inputCommentHead = document.createElement("h5");
  inputCommentHead.classList.add("comment__send__comment-head");
  var text = document.createTextNode("comment");
  inputCommentHead.appendChild(text);

  let inputCommentBox = document.createElement("input");
  inputCommentBox.type = "text";
  inputCommentBox.name = "theComment";
  inputCommentBox.id = "c__send__c";
  inputCommentBox.classList.add("comment__send__comment");
  inputCommentBox.placeholder = "Add a New Comment";

  let submitBox = document.createElement("div");
  submitBox.classList.add("comment__send__comment-box");

  let inputSubmit = document.createElement("input");
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

let inputComment = document.getElementById("comment__input");
CommentInput(inputComment);

function createDefault(div, comments) {
  for (i = 0; i < 3; i++) {
    let avatarBody = document.createElement("div");
    avatarBody.classList.add("comment__c__body");
    avatarBody.classList.add("comment-c-body");
    let avatar = document.createElement("img");
    avatar.classList.add("comment__c__img");
    avatar.classList.add("comment-img");
    avatar.src = comments[i].src;
    avatar.alt = comments[i].alt;
    avatarBody.appendChild(avatar);

    let subBody = document.createElement("div");
    subBody.classList.add("comment__c__textbody");

    let comBody = document.createElement("div");
    comBody.classList.add("comment__c__textbody__heading");
    let cName = document.createElement("h5");
    cName.classList.add("comment__c__name");
    let cDate = document.createElement("h5");
    cDate.classList.add("comment__c__date");
    var text = document.createTextNode(comments[i].name);
    cName.appendChild(text);
    var text = document.createTextNode(comments[i].date);
    cDate.appendChild(text);
    comBody.appendChild(cName);
    comBody.appendChild(cDate);
    subBody.appendChild(comBody);

    let body = document.createElement("div");
    body.classList.add("comment__c__textbody__body");
    let cComment = document.createElement("h5");
    var text = document.createTextNode(comments[i].comment);
    cComment.appendChild(text);
    body.appendChild(cComment);
    subBody.appendChild(body);
    avatarBody.appendChild(subBody);
    div.appendChild(avatarBody);
  }
}

let deafultComment = document.getElementById("comment__default");
createDefault(deafultComment, comments);

const form = document.getElementById("comment__form");
form.addEventListener("submit", submitEvent => {
  submitEvent.preventDefault();
  let nameInput = document.getElementById("c__send__n").value;
  let commentInput = document.getElementById("c__send__c").value;
  let imgInput = document.getElementById("comment-img").src;

  let comment = {};
  comment.name = nameInput;
  comment.date = today;
  comment.src = imgInput;
  comment.comment = commentInput;

  comments.unshift(comment);

  document.getElementById("comment__form").reset();
  console.log(comments);

  clearComments();
  createDefault(deafultComment, comments);
});

function clearComments() {
  var commentReset = document.getElementById("comment__default");
  console.log(commentReset);
  let commentDelete = commentReset.getElementsByClassName("comment__c__body");
  console.log(commentDelete);
  for (var i = commentDelete.length; i > 0; i--) {
    commentReset.removeChild(commentDelete[i - 1]);
  }
}
