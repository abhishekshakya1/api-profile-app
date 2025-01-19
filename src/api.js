const card = document.querySelector(".card");
const button = document.querySelector("#btn");

const showDetails = function() {
    const requestUrl = "https://api.github.com/users/abhishekshakya1";

    fetch(requestUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(`Followers => ${data.followers}`);
            console.log(`Avatar => ${data.avatar_url}`);

            card.innerHTML = `
                <img src="${data.avatar_url}" class="avatar"/>
                <h3>Followers = ${data.followers}</h3>
                <h4>Soon this profile will upgrade 🔥</h4>
            `;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
};

button.addEventListener("click", showDetails);
