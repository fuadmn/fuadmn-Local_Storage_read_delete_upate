


const form = document.querySelector("#form");
const postTitle = document.querySelector("#postTitle");
const imageUrl = document.querySelector("#imageUrl");
const WriteYour = document.querySelector("#WriteYour");
const Write_your = document.querySelector("#Write_your");
const postUl = document.querySelector("#postUl");

document.addEventListener("DOMContentLoaded",loadPost);

function loadPost(){

  const posts = getPost();

 posts.forEach(post => {
  addPostTextDOM(post);
  
 });
  
  
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const postTitleText = postTitle.value.trim();
  const postImage = imageUrl.value;
    const WritePost = WriteYour.value;

  if (postTitleText !== "") {
    const post = {
      id: Date.now(),
      text: postTitleText,
      image: postImage,
      textPost: WritePost,
      completed: false,
    };

    addPostTextDOM(post);
    savePost(post);


    postTitle.value = "";
    imageUrl.value = "";
    WriteYour.value = "";
  }
});

function addPostTextDOM(post) {
  const li = document.createElement("li");
  li.classList = `form`;
  li.dataset.id = post.id;

  li.innerHTML = ` <span class="task">${post.text}</span>  
  <img src="${post.image}" alt="todo image"/>
        <span class="task">${post.textPost}</span> 
                     <div class="edit-delete"> 
                      <button class="edit-btn">Edit</button>
                     <button class="delete-btn">Delete</button>
                      </div>
                    `;

  postUl.appendChild(li);
}


function savePost(post){


  const allPost = getPost();
  
  allPost.push(post)
  
  localStorage.setItem("posts",JSON.stringify(allPost));

}

function getPost(){
    const allPost = JSON.parse(localStorage.getItem("posts")) || [];
    return allPost;

}