let name = "Ian";
name = "matt";  // reassigned name to matt




const person1 = { // if this was let, you can reassing the whole thing with another person1
    name: "Ian",
    age: 21,
    children: ["Sally"],
    spouse: "Jane"
}

person1.name = "matt" // updates const person ian to matt
person1.children[1] = "Bob"  // this assigns bob after sally since sally is in the 0 spot