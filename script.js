let intelligence = [
    "beautiful",
    "cool",
    "smart",
    "fine",
    "cute",
    "blessing",
    "diligent",
    "awesome",
    "extra ordinary",
    "intelligent",
    "God Gifted",
    "average",
    "boring person",
    "jealous person",
    "below Average",
    "careless",
    "an Idiot",
    "dumb as a chicken",
    "foolish",
    "lazy person",
    "rude",
    "cruel person",
]

function game() {
    let user = document.querySelector('input').value;
    if (user == false) {
        alert("Please Enter your name");
    } else {

        let appreciated = parseInt(Math.random() * 22);
        document.querySelector('p').innerHTML = user + ", You are " + intelligence[appreciated] + " !!";
    }

}