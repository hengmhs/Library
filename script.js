window.onload = function(){
	init();
}

let myLibrary = [];

function Book(title, author, pages, read){
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

function addBookToLibrary(book) {
  return myLibrary.push(book);
}

theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
Principles = new Book("Principles","Ray Dalio", 188, true);
theMidnightHour = new Book("The Midnight Hour","Benjamin Read", 288, false);

function init(){
	addBookToLibrary(theHobbit);
	addBookToLibrary(Principles);
	addBookToLibrary(theMidnightHour);
	myLibrary.forEach(book => createCard(book, myLibrary.indexOf(book)));
}


function createCard(book, index){
	const library = document.getElementById("library");
	const card = document.createElement("div");
	card.classList.add("card");
	card.setAttribute('data-index', index);
	const container = document.createElement("div");
	container.classList.add("container")
	const h4 = document.createElement("H4");
	const title = document.createTextNode(book.title);
	const para = document.createElement("p");
	para.innerHTML = `Author: ${book.author}, 
	${book.pages} pages`
	const read = document.createElement("p");
	read.innerHTML = "Read ";
	const checkbox = document.createElement("input");
	checkbox.setAttribute("type","checkbox");
	library.appendChild(card);
	card.appendChild(container);
	container.appendChild(h4);
	h4.appendChild(title);
	container.appendChild(para);
	container.appendChild(read);
	read.appendChild(checkbox);
	if(book.read === true){
		checkbox.checked = true;
	}
}

function popup(){
	const overlay = document.getElementById("overlay");
	if (overlay.style.display === "block"){
		overlay.style.display = "none";
	} else {
		overlay.style.display = "block";
	};
}

function createBook(){
	const title = document.getElementById("booktitle").value;
	const author = document.getElementById("bookauth").value;
	const pages = document.getElementById("bookpagenum").value;
	let read = document.getElementById("bookread").checked;
	const newBook = new Book(title, author, pages, read);
	addBookToLibrary(newBook);
	createCard(newBook, myLibrary.indexOf(newBook));
}
