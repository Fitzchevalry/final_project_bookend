document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("submit_status_button")
    .addEventListener("click", function () {
      const status_val = document.getElementById("statuses_textarea").value;
      const user_status = { user_status: status_val };
      console.log("status_val", status_val);
      document.getElementById("statuses_textarea").value = "";

      fetch("/user_status/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user_status),
      })
        .then((response) => response.json())
        .then((saved_status) => {
          const listItem = document.createElement("li");
          listItem.classList.add("clearfix");
          listItem.innerHTML = `<img src=${saved_status.profile_pic}><div class='poster_name'>${saved_status.firstname}</div><p>${status_val}</p>`;
          document.querySelector(".user_statuses").appendChild(listItem);
        })
        .catch((error) => {
          console.error("Error during status posting:", error);
        });
    });

  document
    .getElementById("user_profile_redirect")
    .addEventListener("click", function () {
      location.href = "http://localhost:3000/user_profile";
    });

  document
    .getElementById("find_friends_redirect")
    .addEventListener("click", function () {
      location.href = "http://localhost:3000/friends";
    });
});