//Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
// Store the names of these animals in a list, 
var common_characteristics_animals = ["Lions", "Tigers", "Leopards"];
//and then use a for loop to print out the name of each animal.
console.log("Animals having common characteristics are:");
console.log("\n");
common_characteristics_animals.forEach(function (element) {
    console.log("".concat(element));
    //Modify your program to print a statement about each animal, such as A dog would make a great pet
    if (element === "Lions") {
        console.log("Lions are known for their social behavior and live in groups called prides. Within the pride, females do most of the hunting while males defend the territory.");
    }
    console.log("\n");
    if (element === "Tigers") {
        console.log("Tigers are the largest of the big cats and are known for their distinctive orange fur with black stripes. They are solitary hunters, typically stalking and ambushing their prey.");
    }
    console.log("\n");
    if (element === "Leopards") {
        console.log("Leopards are excellent climbers and are known for their ability to drag prey up into trees to keep it safe from scavengers and other predators. They are also solitary animals.");
    }
});
console.log("\n");
//Add a line at the end of your program stating what these animals have in common.
console.log("common characteristics they all have as:-");
console.log("Lions, Tigers, and Leopards: These big cats share the common characteristic of being apex predators in their respective habitats. They are carnivorous mammals with similar body structures, including powerful jaws and sharp claws, which they use to hunt and subdue their prey. Additionally, they are all known for their agility and strength.");
