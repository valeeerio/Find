function FindElement() {
    var myArray = ["bho", "parola", "palla"];
    var element = prompt("Inserisci l'elemento");
    if (element != null) {
        var isElementEmptyPresent = myArray.indexOf(element) != -1;
        if (isElementEmptyPresent) {
            console.log(true);
        }
        else {
            console.log(false);
        }
    }
}
