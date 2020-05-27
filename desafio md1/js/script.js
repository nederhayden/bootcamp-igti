let tabNames = null;
let tabStatistic = null;

let allNames = [];
let allStatistic = [];

let totalUsers = 0;
let totalMasc = 0;
let totalFem = 0;
let sumAge = 0;
let averageAge = 0;

window.addEventListener("load", () => {
  tabNames = document.querySelector("#tabNames");
  tabStatistic = document.querySelector("#tabStatistic");
  totalUsers = document.querySelector("#totalUsers");
  totalMasc = document.querySelector("#totalMasc");
  totalFem = document.querySelector("#totalFem");
  sumAge = document.querySelector("#sumAge");
  averageAge = document.querySelector("#averageAge");

  let data = document.querySelector("#ipt-busca");
  data.addEventListener("keyup", activeInput);

  let button = document.querySelector("#ipt-button");
  button.addEventListener("submit", activeInput);

  fetchNames();
});

async function fetchNames() {
  const res = await fetch(
    "https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo"
  );
  const json = await res.json();

  allNames = json.results.map((name) => {
    return {
      firstName: name.name.first,
      lastName: name.name.last,
      picture: name.picture.medium,
      age: name.dob.age,
      gender: name.gender,
    };
  });
  render();
  showFilter();
}

function render() {
  showFilter();
  // showUserFilter();
  showStatistic();
}

function showAllUser() {
  let allUsersHTML = "<div>";

  allNames.forEach((user) => {
    const { firstName, lastName, picture, age, gender } = user;

    const userHTML = `
    <div class='user'>
      <div>
      <img src="${picture}" alt="${firstName}">
      </div>
      <div>
        <ul>
          <li>${firstName} ${lastName}</li>
          <li>Idade: ${age}</li>
        </ul>
      </div>
    </div>
  `;
    allUsersHTML += userHTML;
  });
  allUsersHTML += "</div>";
  tabNames.innerHTML = allUsersHTML;
}

function showStatistic() {}

function activeInput(event) {
  event.preventDefault(); // EVITA RECARREGAR A PAGINA

  let textSearch = event.key; // CAPTURA DO TEXTO DIGITADO

  // CAPTURA DO ENTER
  if (event.key === "Enter") {
    console.log("RESULTADO DO FILTRO");
  }
}

async function showFilter() {
  const res = await fetch(
    "https://randomuser.me/api/?seed=javascript&results=100&nat=BR&noinfo"
  );
  const json = await res.json();
  allNames = json.results.filter((names) => {
    return names.toLowerCase() > -1;
  });
}

console.log(showFilter("fa"));
/* 
function doReduce() {
  const totalAges = people.results.reduce((accumulator, current) => {
    return accumulator + current.dob.age;
  }, 0);
}

function doSort() {
  const mappedNames = people.results
    .map((person) => {
      return {
        name: person.name.first,
      };
    })
    .filter((person) => person.name.startsWith("A"))
    .sort((a, b) => {
      return b.name.length - a.name.length;
      // return a.name.localeCompare(b.name);
    });

  console.log(mappedNames);
}
 */
