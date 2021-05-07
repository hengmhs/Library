window.onload = function(){
	init();
}

let myLibrary = [];

function Book(title, author, pages, read){
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.info = function() {
		return title + " by " + author + "," + " " + pages + " pages," + " " + read;
	}
}

function addBookToLibrary(book) {
  return myLibrary.push(book);
}

theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");
Principles = new Book("Principles","Ray Dalio", 188, "read");

function init(){
	addBookToLibrary(theHobbit);
	addBookToLibrary(Principles);
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
	console.log(checkbox);
	if(book.read === 'read'){
		checkbox.checked = true;
	}
}



console.log(theHobbit.info())