"use script";

const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log("B737"[0]);

console.log(airline.length);
console.log("B737".length);

console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.lastIndexOf("portugal"));

// slice method     (SUB STRING)
console.log(airline.slice(4)); //4- start position at which extraction starts
// output  - Air Portugal
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

// gives teh result from the last
console.log(airline.slice(-2));
// output - al

console.log(airline.slice(2, -1));

// to extract parts of strings
const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") {
    console.log("you got the middle seat!");
  } else {
    console.log("you got lucky");
  }
};
checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

console.log(new String("jonas"));
console.log(typeof new String("jonas"));
// it changes string into object whenever we call a method on a string

console.log(typeof new String("jonas").slice(1));

console.log("***********************");
// **************PART-2***************
// 021_WORKING WITH STRINGS

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// fix capitalization in name

const passenger = "jOnas";
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerLower);
console.log(passengerCorrect);

// comparing email
const email = "hello@gmail.com";
const loginEmail = " Hello@Gmail.Com \n";

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim(); //removes the white spaces
// console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(email === normalizedEmail);

// replacing parts of strings
const priceGB = "288,97@";
const priceUS = priceGB.replace("@", "$").replace(",", ".");
console.log(priceUS);

const announcement = "All passengers come to boarding door 4. Boarding door 4!";

// replace method is case-sensitive
console.log(announcement.replace("door", "gate"));
// to change all the ouccrances of a word
console.log(announcement.replace(/door/g, "gate"));

console.log(announcement.replaceAll("door", "gate"));

// Booleans
const plane1 = "Airbus A320neo";
console.log(plane1.includes("A320"));
console.log(plane1.includes("Aneo"));

if (plane1.startsWith("Airbus") && plane1.endsWith("neo")) {
  console.log("part of the new NEW AIRBUS family");
}

// Practice exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are not allowed on board");
  } else {
    console.log("Welcome Abord");
  }
};

checkBaggage("I have a laptop , some Food and a pocket Knife");
checkBaggage("Socks and Camera");
checkBaggage("Got some snacks and a gun for protection");

// 022_part3

// split and join
console.log("a+very+nice+string".split("+"));
console.log("Tanya Khandelwal".split(" "));

// destructuring
const [firstName, lastName] = "Tanya Khandelwal".split(" ");

const newName = ["Mrs.", firstName, lastName.toUpperCase()].join(" ");
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];

  for (const n of names) {
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(" "));
};
capitalizeName("jessica ann smith davis");
capitalizeName("tani khandelwal");

// padding a string

const message = "Go to gate 23!";
console.log(message.padStart(20, "*").padEnd(30, "+"));
console.log("Jonas".padStart(20, "*").padEnd(30, "+"));

const maskCreditCard = function (number) {
  const str = number + ""; //result will bw number as a string
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};

console.log(maskCreditCard(678987656678945));

console.log(maskCreditCard("345678904567"));

// repeate method

const message2 = "Bad weather!All Departures Delayed...  ";
console.log(message2.repeat(5));

const planeInLine = function (n) {
  console.log(`There are ${n} planes in line ${"✈️".repeat(n)}`);
};

planeInLine(5);
planeInLine(15);

console.log(message.concat("Tanya"));
