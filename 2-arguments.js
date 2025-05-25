function Hello(world) {  
    return world;
}
const arg = Hello("JavaScript");
if (arg === undefined) {
    console.log("No argument");
} else {
    console.log(arg[0]);
}

