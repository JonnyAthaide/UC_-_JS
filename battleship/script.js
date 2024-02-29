var location1 = 3
var location2 = 4
var location3 = 5

var guess // PALPITE DO USUARIO
var hits = 0 // NUMERO DE ACERTOS
var guesses = 0 // NUMERO DE PALPITES DO USUARIO

var inSunk = false // CONCLUSAO



// LOOP enquanto o navio não é afundado
while(inSunk == false) {

    // OBTER palpite do usuario
    guess = prompt("Preparar, apontar... (Entre com um número de 0-6)")

    // COMPARAR a entrada do usuario com os valores de entrada válidos
    // SE o papite do usuario for invalido
    if(guess < 0 || guess > 6) {
        // Diga ao usuario para inserir um numero valido
        alert("Por favor, entre com um valor numérico válido.")

        // SENAO
    } else {
        // ADICIONE um a guesses
        guesses = guesses + 1

        alert("FOGO!!!")

        // SE o palpite do usuario coincidir com uma localização
        if(guess == location1 || guess == location2 || guess == location3) {

            alert("ACERTOU!!!")
            // ADICIONAR um ao numero de acertos
            hits = hits + 1

            // SE o numero de acertos for 3
            if ( hits == 3) {

                // DEFINIR inSunk como "true"
                inSunk = true

                // DIZER ao usuario "Você afundou meu navio!"
                alert("Você afundou meu navio!")
            }
        } else {
            alert("ERROU!!!")
        }
    }

    console.log(hits)
}


var stats = "você acertou "+ guesses +" tentativas para afundar o navio de guerra, o que significa que sua precisão de tiro foi " + (3/guesses)
// DIZER ao usuario as estatiticas
alert(stats)