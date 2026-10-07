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

console.log("\n--- Conditionals and Loops Lab ---");

if (availableBooks === 0) {
  console.log("Library is empty.");
} else if (availableBooks <= 2) {
  console.log("Few books available.");
} else {
  console.log("Many books available.");
}

const availabilityMessage =
  availableBooks > 0
    ? "Books are available for borrowing."
    : "No books are available for borrowing.";

console.log("Availability message:", availabilityMessage);

const selectedCategory = "fiction";

switch (selectedCategory) {
  case "fiction":
    console.log("Selected category: Fiction");
    break;

  case "history":
    console.log("Selected category: History");
    break;

  default:
    console.log("Selected category: Other");
}

console.log("\n--- For Loop ---");

for (let index = 0; index < expandedCatalog.length; index++) {
  console.log(index, expandedCatalog[index]);
}

console.log("\n--- While Loop ---");

let remainingReturns = 3;

while (remainingReturns > 0) {
  console.log("Remaining returns:", remainingReturns);
  remainingReturns--;
}

console.log("Remaining returns after loop:", remainingReturns);

console.log("\n--- Do While Loop ---");

let overdueBooks = 0;

do {
  console.log("Checking overdue books...");
  console.log("Overdue books:", overdueBooks);
} while (overdueBooks > 0);

console.log("\n--- For...of Loop ---");

for (const book of expandedCatalog) {
  console.log("Book:", book);
}

console.log("\n--- For...in Loop ---");

const selectedBook = {
  title: "Duna",
  author: "Frank Herbert",
  year: 1965
};

for (const property in selectedBook) {
  console.log(property, "=", selectedBook[property]);
}

console.log("\n--- Functions Lab ---");

// Function declaration: this call works before the declaration because of hoisting.
console.log("Hoisted catalog size:", getCatalogSize(expandedCatalog));

function getCatalogSize(catalog) {
  return catalog.length;
}

function calculateAvailableBooks(totalBooks, borrowed, returned) {
  return totalBooks - borrowed + returned;
}

const calculatedAvailableBooks = calculateAvailableBooks(
  expandedCatalog.length,
  borrowedBooks,
  returnedBooks
);

console.log("Calculated available books:", calculatedAvailableBooks);

// Function expression: the function is stored in a variable.
const isBookAvailable = function (quantity) {
  return quantity > 0;
};

console.log(
  "Book availability check:",
  isBookAvailable(calculatedAvailableBooks)
);

// Named function expression with recursion.
const factorial = function calculateFactorial(number) {
  if (number <= 1) {
    return 1;
  }

  return number * calculateFactorial(number - 1);
};

console.log("Factorial of 5:", factorial(5));

// Arrow function without parameters.
const getLibraryGreeting = () => "Welcome to the Library Study Lab.";

console.log("Library greeting:", getLibraryGreeting());

// Arrow function with one parameter.
const formatBookTitle = title => title.toUpperCase();

console.log("Formatted title:", formatBookTitle("Duna"));

// Arrow function with multiple parameters.
const buildBookLabel = (title, author) => `${title} — ${author}`;

console.log(
  "Book label:",
  buildBookLabel("Duna", "Frank Herbert")
);

// Arrow function with multiple instructions.
const calculateLoanBalance = (currentBooks, borrowed, returned) => {
  const afterBorrowing = currentBooks - borrowed;
  const finalBalance = afterBorrowing + returned;

  return finalBalance;
};

console.log(
  "Loan balance:",
  calculateLoanBalance(expandedCatalog.length, borrowedBooks, returnedBooks)
);

// Returning an object directly from an arrow function.
const createBookRecord = (title, author, year) => ({
  title,
  author,
  year,
  available: true
});

const functionBookRecord = createBookRecord(
  "Duna",
  "Frank Herbert",
  1965
);

console.log("Book record:", functionBookRecord);

// Constructor function.
function StudyBook(title, author) {
  this.title = title;
  this.author = author;

  this.describe = function () {
    return `${this.title} by ${this.author}`;
  };
}

const studyBook1 = new StudyBook("Duna", "Frank Herbert");
const studyBook2 = new StudyBook("Frankenstein", "Mary Shelley");

console.log("Study book 1:", studyBook1.describe());
console.log("Study book 2:", studyBook2.describe());

// Async function. Promise.resolve simulates data that could arrive later.
async function showAsyncLibrarySummary() {
  const summary = await Promise.resolve({
    name: libraryName,
    totalBooks: expandedCatalog.length
  });

  console.log("Async library summary:", summary);
}

showAsyncLibrarySummary();

console.log("\n--- Built-in Functions Lab ---");

// String methods.
const labBookTitle = "Frankenstein";

console.log("Substring:", labBookTitle.substring(0, 5));
console.log("Uppercase:", labBookTitle.toUpperCase());
console.log("Lowercase:", labBookTitle.toLowerCase());
console.log("Index of 'stein':", labBookTitle.indexOf("stein"));
console.log("Character at index 0:", labBookTitle.charAt(0));
console.log("Replaced title:", "O Hobbit".replace("O ", ""));

// Math methods.
console.log("Highest rating:", Math.max(4.2, 4.8, 3.9));
console.log("Lowest rating:", Math.min(4.2, 4.8, 3.9));
console.log("Absolute balance:", Math.abs(-3));
console.log("Rounded rating:", Math.round(4.6));
console.log("Floor rating:", Math.floor(4.6));
console.log("Ceil rating:", Math.ceil(4.1));

// Date methods. A fixed date keeps the lab output predictable.
const studyDate = new Date(2026, 9, 7, 14, 30);

console.log("Year:", studyDate.getFullYear());
console.log("Month index:", studyDate.getMonth());
console.log("Day of month:", studyDate.getDate());
console.log("Day of week:", studyDate.getDay());
console.log("Hour:", studyDate.getHours());
console.log("Minutes:", studyDate.getMinutes());

// Error handling based on the pattern used in the lesson.
function addBookCounts(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new ReferenceError("x and y must be numbers.");
  }

  return x + y;
}

try {
  console.log("Valid book count:", addBookCounts(2, 3));
  console.log("Invalid book count:", addBookCounts("2", 3));
} catch (error) {
  console.log("Caught error:", error.message);
} finally {
  console.log("Book count validation finished.");
}

// JavaScript division by zero does not throw by itself.
try {
  const divisionByZeroResult = 10 / 0;
  console.log("10 / 0:", divisionByZeroResult);
} catch (error) {
  console.log("Division error:", error.message);
} finally {
  console.log("Division test finished.");
}
