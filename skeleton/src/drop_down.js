
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

const dogLinkCreator = () => {
  const dogLinks = [];

  for (const [key, value] of Object.entries(dogs)) {
    const a = document.createElement("a");
    a.innerHTML = key;
    a.href = value;
    const li = document.createElement("li");
    li.className = "dog-link";
    li.appendChild(a);
    dogLinks.push(li);
  }

  return dogLinks;
}

 const attachDogLinks = () => {
  const dogLinks = dogLinkCreator();
  dogLinks.forEach( el => {
    document.getElementsByClassName("drop-down-dog-list")[0].appendChild(el);
  });
}

const handleEnter = e => {
  const dogLinks = Array.from(document.getElementsByClassName('dog-links'));
  dogLinks.forEach(el => {el.classList.add("show")});
}

const handleLeave = e => {
  const dogLinks = Array.from(document.getElementsByClassName('dog-links'));
  dogLinks.forEach(el => {el.classList.remove("show")});
}

attachDogLinks();
const h = document.getElementById("c-dogs")
h.addEventListener('mouseleave', handleLeave);
h.addEventListener('mouseenter', handleEnter);