const id = new URLSearchParams(window.location.search).get("id");
const container = document.querySelector(".details");

const renserDetails = async () => {
  let uri = `http://localhost:3000/posts/${id}`;
  const res = await fetch(uri);
  const post = await res.json();
  let template = `
    <h1>${post.title}</h1>
    <p>${post.body}</p>
  `;
  container.innerHTML = template;
};

window.addEventListener("DOMContentLoaded", (e) => renserDetails());
