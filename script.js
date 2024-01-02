const buttons = document.getElementById('wordcounter')
const wordCount = document.getElementById('result')
const input = document.getElementById('textarea')

buttons.addEventListener('click', () => {
    getWordCount(input, wordCount)
});

function getWordCount(input, wordElement) {
    if(input.value.trim() === ''){
        alert('please put some value')
    }else{
        wordElement.innerText = input.value.split(' ')
      .filter(function(n) { return n != '' })
      .length;

    }
}


















