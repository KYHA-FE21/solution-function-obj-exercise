Instruktioner
Skapa ett objekt med följande properties:
accountName, ska vara data typen string
balance, ska vara datatypen nummer
getBalance, ska vara en funktion
deposit, ska vara en funktion
withdrawal, också en funktion
getAccountName, en funktion igen
accountError, och till sist en funktion till!
exitAccount, ska avsluta appen och stänga ner

Beskrivning av vad de olika objektets properties ska göra:
accountName: innehålla kontohavarens namn
balance: innehålla kontots initiala balans/summa
getBalance: en funktion som returnerar nuvarande balans på kontot
deposit: en funktion för att sätta in pengar på kontot
withdrawal: en funktion för att kunna ta ut pengar från kontot
getAccountName: visa kontoinnehavarens namn
accountError: valfritt! Upp till dig att fundera på hur du skulle kunna använda den här på ett bra sätt
exitAccount: ska alltså avsluta hela appen, prompten ska stängas ner.
Kom ihåg
En funktion är bara ett värde. Och om en funktion bara är ett värde så betyder det att vi kan skicka in det som en parameter i en funktion och sedan låta det vara en property av objektet.

Krav
Objektet ska innehålla alla logik i vår bankapp
Funktionen atm() ska innehålla UI, alltså endast visa gränsnitt baserat på användarens val.
En användare få INTE lov att sätta in eller ta ut negativa tal eller 0.
En användare får INTE lov att ta ut eller sätta in något som inte är ett giltligt nummer.
En användare får INTE lov att ta ut en högre summa än vad som finns på kontot.
En användare ska INTE få lov att ge en ogiltlig input til prompten, endast de tal som går att välja emellan är ok.
Att tänka på:
Du kommer att behöva använd dig av jämförelse operatorer och villkor
Hur pekar vi på objektets property korrekt? Du ska inte upprepa dig i koden om du redan har tillgång till värdet.
För att prompten ska fungera som det är tänkt behöver vi använda funktionen parseFloat(), varför?
Challenge:
Skapa ett gränssnitt med HTMl och CSS till din bankapp.
