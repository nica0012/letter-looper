var letter;
var i;
var k;

while (!letter) {

    letter = prompt("Enter a character!");

    for (i = 0; i < 10; i += 1) {

        for (k = 0; k < i; k++) {
            document.write(letter);
        }
        
        document.write("<br>");
    }

}