
/* 1)	Create a class called “Library” with methods to add books, remove books,
     and search books by title. The methods should take types arguments and perform respective operations. */
// constructor
//array filter concept for removebook
     class Library{

        books : string[];
        constructor(){
            this.books = [];
        }

        addBook(bookTitle:string) : void {
            this.books.push(bookTitle);
            console.log(`Book:"${bookTitle}" is added to the library `);
        }

        removeBook(bookTitle:string):void {
            const index = this.books.indexOf(bookTitle);
            if(index == -1){
                console.log(`the Book:"${bookTitle}" not there in the library`);
            }
            else{
                this.books.splice(1, index);
                console.log(`The Book:"${bookTitle}" removed from the library`);
            }
        }

        searchBook(bookTitle:string):void {
            let x = 0;
            const foundBook : string[]=[];
            for(const i of this.books){
                if(i.toLowerCase().includes(bookTitle.toLowerCase())){
                    x = 1;
                    foundBook.push(i);
                }
            }


            if(x == 1){
                console.log(`The Book with the title "${foundBook}" found`);
            }
            else{
                console.log("not found");
            }

        }

        printAvailableBooks():void{
            console.log("After perferfoming all the operations the available books in the library are");
            for(const i of this.books){
                console.log(i);
            }
        }
     }

     const library = new Library();
     library.addBook("Like it happended yesterday");
     library.addBook("Harrypotter");
     library.removeBook("Harrypotter");
     library.addBook("The Mahabharata");
     library.searchBook("Mahabharata");
     library.printAvailableBooks();
    