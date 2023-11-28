function FindElement() {
  const myArray: string[] = ["bho", "parola", "palla"];
  const element: string | null = prompt("Inserisci l'elemento");
  if (element != null) {
    const isElementEmptyPresent: boolean = myArray.indexOf(element) != -1;
    if (isElementEmptyPresent) {
      console.log(true);
    } else {
      console.log(false);
    }
  }
}
