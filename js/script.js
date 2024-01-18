const usernameInput = document.querySelector("#usernameInput");
const usernameConfirm = document.querySelector("#usernameConfirm");
const mainTitle = document.querySelector(".mainTitle");
const usernameIdent = document.querySelector(".usernameIdent");
const hangmanImage = document.querySelector(".hangmanImage");
const playZone = document.querySelector(".playZone")

const food = [
    ["Sushi", "../images/sushi.jpg", "És un plat típic japonès que consisteix en arròs condimentat amb vinagre acompanyat de peix, marisc o altres ingredients com l'alga nori."],
    ["Pizza", "../images/pizza.jpg", "La pizza és un plat d'origen italià que consisteix en una base de massa de pa plana coberta amb tomàquet, formatge i altres ingredients com embotits o verdures."],
    ["Tacos", "../images/tacos.jpg", "Els tacos són un plat tradicional mexicà que consisteix en una tortilla farcida amb carn, peix, verdures i diverses salses."],
    ["Paella", "../images/paella.jpg", "La paella és un plat espanyol típic, especialitat de la regió de València. Conté arròs, pollastre, conill, fesols i altres ingredients segons la variant."],
    ["Curry", "../images/curry.jpg", "El curry és un plat aromàtic d'origen asiàtic que consisteix en carn o verdures cuinades amb una sopa espessa i força condimentada."],
    ["Croissant", "../images/croissant.jpg", "El croissant és un pa de mantega francès amb una forma característica de mitja lluna. És famós pel seu gust mantegós i la seva textura escamosa."],
    ["Churros", "../images/churros.jpg", "Els churros són un dolç frit d'origen espanyol que es sol acompanyar amb xocolata calenta. Tenen una forma allargada i són cruixents per fora i suaus per dins."],
    ["Pasta", "../images/pasta.jpg", "La pasta és un aliment italià que inclou varietats com espaguetis, fusilli, penne, etc. Es combina amb diverses salses, des de tomaquet fins a crema."],
    ["Sashimi", "../images/sashimi.jpg", "El sashimi és un plat japonès que consisteix en trossos finament tallats de peix cru fresc, servit sense arròs. És una delícia per als amants del peix cru."],
    ["Hamburguesa", "../images/hamburguesa.jpg", "La hamburguesa és un plat popular d'origen nord-americà que consisteix en una carn picada premsada entre dues peces de pa i sol acostar-se amb diversos ingredients com formatge, enciams, tomàquet, etc."],
    ["DimSum", "../images/dimsum.jpg", "El Dim Sum és una especialitat de la cuina xinesa que inclou diferents tipus de petits plats com dumplings, bunyols, i altres snacks, tradicionalment servits en cistells de vapor."],
    ["Tiramisu", "../images/tiramisu.jpg", "El tiramisú és un postre italià que combina capes de cafè empapat en licor amb capes de crema mascarpone i cacao en pols. És una delícia decadent."],
    ["Helado", "../images/helado.jpg", "El gelat és un postre fred que ve en una àmplia varietat de sabors. És perfecte per refrescar-se, especialment en dies calorosos."],
    ["Empanada", "../images/empanada.jpg", "L'empanada és un plat tradicional d'origen espanyol i sud-americà, que consisteix en una massa farcida de carn, peix o verdures."],
];

const countries = [
    ["Japó", "../images/japan.jpg", "Japó és una nació insular d'Àsia Oriental coneguda per la seva rica cultura i tradicions mil·lenàries."],
    ["Egipte", "../images/egypt.jpg", "Egipte és un país situat al nord-est d'Àfrica, conegut pels seus monuments antics com les piràmides i l'esfinx."],
    ["França", "../images/france.jpg", "França és un país situat al cor d'Europa occidental, famós per la seva gastronomia, moda i art."],
    ["Austràlia", "../images/australia.jpg", "Austràlia és un continent i un país insular conegut per la seva diversitat geogràfica, fauna única i estils de vida relaxats."],
    ["Perú", "../images/peru.jpg", "Perú és un país situat a Amèrica del Sud, famós per la seva rica història, les ruïnes de Machu Picchu i la seva cuina exquisida."],
    ["Brasil", "../images/brazil.jpg", "Brasil és el país més gran d'Amèrica del Sud, conegut per les seves festes animades, les platges tropicals i l'Amazònia."],
    ["Xina", "../images/china.jpg", "Xina és una antiga civilització d'Àsia Oriental, coneguda per la seva llarga història, arquitectura impressionant i cuina variada."],
    ["Itàlia", "../images/italy.jpg", "Itàlia és un país al sud d'Europa, famós pel seu patrimoni artístic, la seva arquitectura i la seva deliciosa cuina."],
    ["Grècia", "../images/greece.jpg", "Grècia és una nació situada al sud-est d'Europa, coneguda per la seva rica història, mitologia i magnífiques illes."],
    ["Marroc", "../images/morocco.jpg", "Marroc és un país d'Àfrica del Nord amb una rica herència cultural, ciutats històriques i paisatges diversos."],
    ["Espanya", "../images/spain.jpg", "Espanya és un país divers amb regions úniques, conegut per la seva festiva cultura, platges assolellades i arquitectura impressionant."],
    ["Turquia", "../images/turkey.jpg", "Turquia és un país transcontinental, situat entre Europa i Àsia, conegut per la seva història, arquitectura i cuina única."],
    ["Índia", "../images/india.jpg", "Índia és una nació diversa a l'Àsia del Sud, coneguda per la seva cultura rica, temples majestuosos i cuina aromàtica."],
];

const animals = [
    ["Elefant", "../images/elephant.jpg", "L'elefant és un mamífer majestuós conegut per les seves grans orelles i trompa. És un símbol de saviesa i força."],
    ["Lleó", "../images/lion.jpg", "El lleó és un gran fèlid que habita a les zones de sabana d'Àfrica. És conegut com el rei de la selva."],
    ["Cangur", "../images/kangaroo.jpg", "El cangur és un marsupial natiu d'Austràlia conegut per la seva habilitat per saltar amb les seves potes poderoses."],
    ["Koala", "../images/koala.jpg", "El koala és un mamífer arborícola d'Austràlia, conegut per la seva dieta de fulles d'eucaliptus i la seva naturalesa adormidora."],
    ["Llama", "../images/llama.jpg", "La llama és un mamífer originari d'Amèrica del Sud, emparentat amb el camell. És utilitzat com a animal de càrrega i productor de llana."],
    ["Còndor", "../images/condor.jpg", "El còndor és una àmplia àliga que habita les muntanyes d'Amèrica del Sud. És un símbol de llibertat i poder."],
    ["Panda", "../images/panda.jpg", "El panda és un ós natuïu de Xina, conegut pel seu pelatge blanc i negre. És un símbol de conservació i amabilitat."],
    ["Tigre", "../images/tiger.jpg", "El tigre és un gran fèlid amb un pelatge distintiu de ratlles. És en perill d'extinció i és un símbol de força i bellesa."],
    ["Cobra", "../images/cobra.jpg", "La cobra és una serp verinosa que es troba a diverses regions del món. Té una caputxa distintiva i pot ser perillosa per als humans."],
    ["Canguroo", "../images/kangaroo.jpg", "El canguroo és un marsupial saltador d'Austràlia, conegut per les seves salts gràcies a les seves potes posteriors fortes."],
    ["Goril·la", "../images/gorilla.jpg", "El goril·la és un gran simi que habita les selves d'Àfrica central. És un dels primats més poderosos i intel·ligents."],
    ["Koala", "../images/koala.jpg", "El koala és un mamífer arborícola d'Austràlia, conegut per la seva dieta de fulles d'eucaliptus i la seva naturalesa adormidora."],
    ["Girafa", "../images/giraffe.jpg", "La girafa és el mamífer més alt del món, amb un coll llarg i potes llargues. És una figura icònica de les terres africanes."],
    ["Pingüí", "../images/penguin.jpg", "El pingüí és un ocell marí que habita les regions polars. És conegut per la seva forma única de caminar i la seva vida marina."],
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

    var randomCategory = Math.floor(Math.random() * words.length);

    var displayWord = document.createElement("div");
    displayWord.className = "displayWord";
    document.body.appendChild(displayWord);

    if (randomCategory == 0) {
        var randomFood = foodTransformado[Math.floor(Math.random() * foodTransformado.length)];
        displayWord.innerHTML = "Categoria: Menjar<br>" + mostrarPalabra(randomFood);
    } else if (randomCategory == 1) {
        var randomCountries = countriesTransformado[Math.floor(Math.random() * countriesTransformado.length)];
        displayWord.innerHTML = "Categoria: Països<br>" + mostrarPalabra(randomCountries);
    } else if (randomCategory == 2) {
        var randomAnimals = animalsTransformado[Math.floor(Math.random() * animalsTransformado.length)];
        displayWord.innerHTML = "Categoria: Animals<br>" + mostrarPalabra(randomAnimals);
    }
}

// Función para mostrar una palabra transformada
function mostrarPalabra(palabraTransformada) {
    return palabraTransformada.map(item => item.join(' ')).join(' ');
}

function WordToArray(words) {
    return words.map(item => [item[0].split('')]);
}

const foodTransformado = WordToArray(food);
const countriesTransformado = WordToArray(countries);
const animalsTransformado = WordToArray(animals);