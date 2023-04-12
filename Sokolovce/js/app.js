
window.onload = function() {
    generateQoute();
    document.getElementById("generate").addEventListener('click', generateQoute);
}
// citat generator 
const generateQoute = function () {
    const qoutes = [
        {
            qoute:'"Nebudem chodiť do súboja, čo sa mám zraniť ako Rado?"',
            author: '-Richard'
        },
        {
            qoute: '"Sme bohatý klub, ale natankovať treba, rozumieš."',
            author: '-Anonym'
        },
        {
            qoute: '"Nenalievaj vela, nechcem sa oliať."',
            author: '-Richard'
        },
        {
            qoute: '"Musíš vedieť stopnuť loptu."',
            author: '-Anonym'
        }
    ];
    let arrayIndex = Math.floor (Math.random()*qoutes.length);

    document.getElementById("quotes").innerHTML = qoutes[arrayIndex].qoute;
    document.getElementById("author").innerHTML = qoutes[arrayIndex].author;
}

window.onload = function() {
    generateQoute();
    document.getElementById("generate").addEventListener('click', generateQoute);
}


