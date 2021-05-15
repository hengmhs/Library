window.onload = function(){
	init();
}

let myLibrary = [];

class Book {
	constructor(title, author, pages, read){
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.read = read;
	}
};

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
	const container = document.createElement("div");
	container.classList.add("container")
	const deleteButton = document.createElement("div");
	deleteButton.classList.add("deleteButton");
	deleteButton.setAttribute('data-index', index); // assigns index to the button corresponding to the library object
	const trashcan = document.createElement('p');
	trashcan.innerHTML = 'x';
	trashcan.classList.add('trashcan');
	const h4 = document.createElement("H4");
	const title = document.createTextNode(book.title);
	const para = document.createElement("p");
	para.innerHTML = `Author: ${book.author}, 
	${book.pages} pages`
	const read = document.createElement("p");
	read.innerHTML = "Read ";
	const checkbox = document.createElement("input");
	checkbox.setAttribute("type","checkbox");
	checkbox.setAttribute('data-index', index);
	library.appendChild(card);
	card.appendChild(container);
	card.appendChild(deleteButton);
	deleteButton.appendChild(trashcan);
	container.appendChild(h4);
	h4.appendChild(title);
	container.appendChild(para);
	container.appendChild(read);
	read.appendChild(checkbox);
	if(book.read === true){
		checkbox.checked = true;
	}
	deleteButton.addEventListener("click", function(){
		delBook(this.dataset.index); // deletes the respective library object in array
	});
	checkbox.addEventListener("click", function(){
		const book = myLibrary[this.dataset.index];
		if(book.read === true){
			book.read = false;
		} else {
			book.read = true;
		}
	});
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
	clearLib();
	myLibrary.forEach(book => createCard(book, myLibrary.indexOf(book)));
}

// clears the library div in DOM
function clearLib(){
	const library = document.getElementById("library");
	library.innerHTML = "";
}

function delBook(index){
	// removes the book from the library
	myLibrary.splice(index, 1);
	clearLib();
	myLibrary.forEach(book => createCard(book, myLibrary.indexOf(book)));
}