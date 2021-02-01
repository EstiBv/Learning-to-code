"use strict";

const inputText = document.querySelector(".js-organizationName");
const inputButton = document.querySelector(".js-button");
const resultParagraph = document.querySelector(".js-result");

function getReposOrganizationsGitHub() {
  const inputTextValue = inputText.value;
  fetch(`https://api.github.com/orgs/${inputTextValue}`)
    // primera petición al servidor.
    .then((respone) => respone.json())
    .then((data) => {
      const dataArray = data.repos_url;
      return fetch(dataArray);
    })
    //  hacer una nueva petición a esa URL (* repos_url)
    .then((repoResponse) => repoResponse.json())
    .then((repoData) => {
      for (const repo of repoData) {
        resultParagraph.innerHTML += `<li>${repo.name}</li>`;
      }
    });
}

inputButton.addEventListener("click", getReposOrganizationsGitHub);
