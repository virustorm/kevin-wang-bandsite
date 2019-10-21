var submit = document.querySelector(".comment__send__button");
var theDate = new Date();
var today =
  theDate.getMonth() + "/" + theDate.getDate() + "/" + theDate.getFullYear();

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
  for (i = comments.length - 1; i >= comments.length - 3; i--) {
    console.log(i);
    let avatarBody = document.createElement("div");
    avatarBody.classList.add("comment__c__body");
    avatarBody.classList.add("comment-c-body");
    let avatar = document.createElement("img");
    avatar.classList.add("comment__c__img");
    avatar.classList.add("comment-img");
    avatar.alt = comments[i].src;
    avatar.alt = "";
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
    var text = document.createTextNode(comments[i].timestamp);
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

const getApi = `${url}comments${apiKey}`;
function getComment() {
  axios
    .get(getApi)
    .then(response => createDefault(deafultComment, response.data));
}

getComment();

const form = document.getElementById("comment__form");
form.addEventListener("submit", submitEvent => {
  submitEvent.preventDefault();
  let nameInput = document.getElementById("c__send__n").value;
  let commentInput = document.getElementById("c__send__c").value;
  let imgInput = document.getElementById("comment-img").src;

  let comment = {};
  comment.name = nameInput;
  comment.timestamp = today;
  comment.src = imgInput;
  comment.comment = commentInput;

  console.log(comment);

  axios
    .post(
      "https://project-1-api.herokuapp.com/comments/?api_key=<ca1242e8-e055-48c6-b7b4-9bf8e60c1012>",
      { name: nameInput, comment: commentInput }
    )
    .catch(function(error) {
      console.log(error);
    });

  document.getElementById("comment__form").reset();

  clearComments();
  getComment();
});

function clearComments() {
  var commentReset = document.getElementById("comment__default");
  let commentDelete = commentReset.getElementsByClassName("comment__c__body");
  for (var i = commentDelete.length; i > 0; i--) {
    commentReset.removeChild(commentDelete[i - 1]);
  }
}
