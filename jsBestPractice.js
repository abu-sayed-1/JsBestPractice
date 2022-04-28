const bioData = {
    name: "Abu Sayed",
    age: 20,
};

// Bad Practice
function personBadP (b) {
    if (b.age) {
      if (b.age < 18) {
          return "you're not allowed this page!";
      } else if (b.age >= 18) {
          return "congratulations" +" "+ b.name; 
      }else {
        return ; 
      }
    }else {
        return "age not found!";
    }
}

// intermediate practice
const personIntmP = (b) => {
    let result = "";
    if (!b.age) result = "age not found!";
    if (b.age < 18) result = "you're not allowed this page!";
    if (b.age >= 18) result = "congratulations" +" "+ b.name;
    return result;
}

// best practice
const personBestP = bio => {
    if (!bio.age) return "age not found!";
    if (bio.age < 18) return "you're not allowed this page!";
    if (bio.age >= 18) return `congratulations ${bio.name}`;
    return "something wrong!";
};

console.log(personBestP(bioData))
