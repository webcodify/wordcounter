


let textarea = document.querySelector("textarea")
let words= document.getElementById("words")
let characters= document.getElementById("characters")
let sentences= document.getElementById("sentences")

textarea.addEventListener("input",function() {
    characters.textContent = textarea.value.length

    let text = textarea.value.trim();
    words.textContent = text.split(/\s+/).filter((item) => item).length;


    let sentencesLength = text.split(/[.|!|?]+/g).length
    sentences.textContent = sentencesLength-1;
})


/*
split(/\s+/) => splits the array at every kind of whitespace character
> "foo   bar".split(/\s+/)
[ 'foo', 'bar' ]
> "foo   bar".split(" ")
[ 'foo', '', '', 'bar' ]
*/