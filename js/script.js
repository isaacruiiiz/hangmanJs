const usernameInput = document.querySelector("#usernameInput");
const usernameConfirm = document.querySelector("#usernameConfirm");
const mainTitle = document.querySelector(".mainTitle");
const usernameIdent = document.querySelector(".usernameIdent");
const hangmanImage = document.querySelector(".hangmanImage");
const playZone = document.querySelector(".playZone")

const food = [
    "Sushi",
    "Pizza",
    "Tacos",
    "Paella",
    "Curry",
    "Croissant",
    "Churros",
    "Pasta",
    "Sashimi",
    "Hamburguesa",
    "DimSum",
    "Tiramisú",
    "Gelato",
    "Empanada",
  ];

const countries = [
    "Japón",
    "Egipto",
    "Francia",
    "Australia",
    "Perú",
    "Brasil",
    "China",
    "Italia",
    "Grecia",
    "Marruecos",
    "España",
    "Turquía",
    "India",
  ];

const animals = [
    "Elefante",
    "León",
    "Canguro",
    "Koala",
    "Llama",
    "Cóndor",
    "Panda",
    "Tigre",
    "Cobra",
    "Kangaroo",
    "Gorila",
    "Koala",
    "Jirafa",
    "Pinguino",
  ];

const words = [
    food,
    countries,
    animals
]

playZone.style.display = "none"
usernameConfirm.addEventListener('click',startGame);

function startGame() {
    usernameIdent.style.display = "none";
    playZone.style.display = "flex";

    const randomWord = words[Math,random() * words.length];

    document.write.randomWord;
}