const libraryName = "Library Study Lab";

let totalOperations = 0;

const books = [
  "1984",
  "Frankenstein",
  "O Hobbit"
];

console.log("Library:", libraryName);
console.log("Books:", books);
console.log("Total books:", books.length);
console.log("Operations:", totalOperations);

books.push("Duna");
totalOperations += 1;

console.log("Books after addition: ", books);
console.log("Total books: ", books.length);
console.log("Operations: ", totalOperations);

const removedBook = books.pop();
totalOperations += 1;

console.log("Removed book:", removedBook);
console.log("Books after removal:", books);
console.log("Total books:", books.length);
console.log("Operations:", totalOperations);

const firstRemovedBook = books.shift();
totalOperations += 1;

console.log("First removed book:", firstRemovedBook);
console.log("Books after shift:", books);
console.log("Total books:", books.length);
console.log("Operations:", totalOperations);

books.unshift("Drácula");
totalOperations += 1;

console.log("Books after unshift: ", books);
console.log("Total books: ", books.length);
console.log("Operations: ", totalOperations);

const firstBook = books[0];
const secondBook = books[1];
const lastBook = books[books.length - 1];

console.log("First book:", firstBook);
console.log("Second book:", secondBook);
console.log("Last book:", lastBook);

books.push("Drácula");
totalOperations += 1;

const firstDraculaIndex = books.indexOf("Drácula");
const lastDraculaIndex = books.lastIndexOf("Drácula");
const duneIndex = books.indexOf("Duna");

console.log("Books for search:", books);
console.log("First Dracula index:", firstDraculaIndex);
console.log("Last Dracula index:", lastDraculaIndex);
console.log("Dune index:", duneIndex);
console.log("Operations:", totalOperations);

const newBooks = ["Duna", "Fundação"];

const expandedCatalog = books.concat(newBooks);

console.log("Original books:", books);
console.log("New books:", newBooks);
console.log("Expanded catalog:", expandedCatalog);

const catalogText = expandedCatalog.join(" | ");

console.log("Catalog as text:", catalogText);

const selectedBooks = expandedCatalog.slice(1, 4); // o início entra e o fim não entra

console.log("Selected books:", selectedBooks);
console.log("Expanded catalog after slice:", expandedCatalog);

const editableCatalog = expandedCatalog.slice();

const removedBooks = editableCatalog.splice(2, 2);

console.log("Removed with splice:", removedBooks);
console.log("Editable catalog after splice:", editableCatalog);
console.log("Original expanded catalog:", expandedCatalog);

const catalogCopy = [...expandedCatalog];

catalogCopy.push("Neuromancer");

console.log("Catalog copy with spread:", catalogCopy);
console.log("Expanded catalog after spread copy:", expandedCatalog);

const literalArray = ["Duna", "Fundação"];

const constructorArray = new Array("Duna", "Fundação");

const ofArray = Array.of("Duna", "Fundação");

const fromArray = Array.from("Duna");

const arrayWithLength = new Array(3);

console.log("Array literal:", literalArray);
console.log("Array constructor:", constructorArray);
console.log("Array.of:", ofArray);
console.log("Array.from:", fromArray);
console.log("new Array(3):", arrayWithLength);
console.log("new Array(3) length:", arrayWithLength.length);

console.log("\n--- Operators Lab ---");

const borrowedBooks = 2;
const returnedBooks = 1;

let availableBooks = expandedCatalog.length;

availableBooks = availableBooks - borrowedBooks;
availableBooks = availableBooks + returnedBooks;

console.log("Catalog size:", expandedCatalog.length);
console.log("Borrowed books:", borrowedBooks);
console.log("Returned books:", returnedBooks);
console.log("Available books:", availableBooks);

const booksPerShelf = 2;
const booksWithoutCompleteShelf = availableBooks % booksPerShelf;

console.log("Books per shelf:", booksPerShelf);
console.log("Books without a complete shelf:", booksWithoutCompleteShelf);

const shelfLevels = 3;
const storagePossibilities = booksPerShelf ** shelfLevels;

console.log("Shelf levels:", shelfLevels);
console.log("Storage possibilities:", storagePossibilities);

let postIncrementCounter = 5;

console.log("Post-increment value used:", postIncrementCounter++);
console.log("Post-increment value after:", postIncrementCounter);

let preIncrementCounter = 5;

console.log("Pre-increment value used:", ++preIncrementCounter);
console.log("Pre-increment value after:", preIncrementCounter);

let postDecrementCounter = 5;

console.log("Post-decrement value used:", postDecrementCounter--);
console.log("Post-decrement value after:", postDecrementCounter);

let preDecrementCounter = 5;

console.log("Pre-decrement value used:", --preDecrementCounter);
console.log("Pre-decrement value after:", preDecrementCounter);

const numericBookCode = 5;
const textBookCode = "5";

console.log("5 == \"5\":", numericBookCode == textBookCode);
console.log("5 === \"5\":", numericBookCode === textBookCode);
console.log("5 != \"5\":", numericBookCode != textBookCode);
console.log("5 !== \"5\":", numericBookCode !== textBookCode);

const hasAvailableBooks = availableBooks > 0;
const hasReturnedBooks = returnedBooks > 0;
const catalogIsEmpty = expandedCatalog.length === 0;

const canBorrowBook = hasAvailableBooks && !catalogIsEmpty;
const hasActivity = catalogIsEmpty || hasReturnedBooks;
const noBooksAvailable = !hasAvailableBooks;

console.log("Has available books:", hasAvailableBooks);
console.log("Has returned books:", hasReturnedBooks);
console.log("Catalog is empty:", catalogIsEmpty);

console.log("Can borrow book:", canBorrowBook);
console.log("Has activity:", hasActivity);
console.log("No books available:", noBooksAvailable);
