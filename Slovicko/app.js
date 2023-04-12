// DATA
const maxWordLength = 5
const maxTries = 5
const allMyWords = [
	'balls',
	'pizza',
	'sorry',
	'about',
	'hello',
	'mouse',
	'italy',
	'light',
	'cakes'
]

let solution = allMyWords[allMyWords.length*Math.random()|0].toLowerCase()
let word = ''
let tries = 1

let lettersInRow = {
	correct:[],
	wrong:[],
	present:[]

}


console.dir(solution)

// KEYBOARD
document.addEventListener('keydown', (event) => {

	if (event.key === 'Enter') {
		submitWord()
	}
	else if (event.key === 'Backspace') {
		removeLetter()
	}
	else {
		addLetter(event.key)
	}

})

// SUBMIT
const submitWord = () => {
	if (word.length !== maxWordLength) return

	findLettersInRow ()

	animateTileReveal(currentRow())

	setTimeout(() => {
		judgeResult()
	}, 4000)
}

// ADD LETTER
const addLetter = (character) => {
	if (word.length >= maxWordLength) return

	// allow only letters
	if (/^\p{L}$/u.test(character)) {
		word = word + character
		word = word.toLowerCase()

		let tile = currentTile()
		tile.innerHTML = character

		animateTileBounce(tile)
	}

	console.log(word)
}

// REMOVE LETTER
const removeLetter = () => {
	if (word.length <= 0) return

	let tile = currentTile()
	tile.innerHTML = ''
	tile.className = 'tile'

	word = word.slice(0, -1)
	console.log(word)
}

// TILE TO UPDATE
const currentTile = () => {
	return currentRow().querySelector(':nth-child(' + word.length + ')')
}

// CURRENT ROW
const currentRow = () => {
	return document.querySelector('.row:nth-child(' + tries + ')')
}

// JUDGE RESULT
const judgeResult = () => {
	if (word === solution) {
		animateTileDance(currentRow())
	}
	else if (tries >= maxTries) {
		YouLose()

		setTimeout(()=> {
			alert('riešenie bolo: ' + solution.toUpperCase())
			window.location.reload()
		},2000)
	}
	else {
		word = ''
		tries++
	}
}

const findLettersInRow = () => {
	let present = []
	let wrong = []
	let correct = []

	;[...word].forEach((letter,index) => {

		//letter in correct place
		if (solution.charAt(index)===letter) {
            correct.push (letter)
        }
		//leter in wrong place
		else if (solution.includes(letter)) {
            present.push (letter)
        }
		//wrong number
		else  {
            wrong.push (letter)
        }
	})

	lettersInRow = {
		present, correct,wrong
		
	}
}


