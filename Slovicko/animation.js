// BOUNCE WHEN YOU ADD NEW LETTER
const animateTileBounce = (tile) => {
	tile.classList.add('is-filled', 'animate__animated', 'animate__bounceIn')
}

// ROTATE TILE, WHEN YOU SUBMIT AN EXISTING WORD
const animateTileReveal = (row) => {
	row.querySelectorAll('.tile').forEach((tile, index) => {
		tile.classList.remove('animate__bounceIn', 'animate__flipInY')

        //Ak uz raz svieti nech sa neoznaci opat 
        let presentLetters = []

        // if (!allMyWords.includes(word) ){
        //     	animateRowShake(currentRow())
        //     	return
        //     }
        tile.style.visibility = 'hidden'
        //ak sa zhoduje zafarbi kocku
        let tileLetter = word.charAt(index)
        let colorClass = "wrong"
    
        //ak letter is both present aj correct, zobrazi sa iba correct 
        //present nech sa zobrazi iba raz 
        if (solution.includes(tileLetter)) {
            if(!lettersInRow.correct.includes(tileLetter) && !presentLetters.includes(tileLetter)){
                colorClass = 'present'
                presentLetters.push(tileLetter)
            }
            
        }
        
        //if letter is in correct place  
        if (solution.charAt(index)===tileLetter) {
            colorClass = 'correct'
        }

        tile.classList.add (colorClass)

		setTimeout(() => {
            tile.style.visibility = 'visible'
			tile.classList.add('animate__flipInY', `animate__delay-${index}s`)
		}, 0)
	})

    // keyboard row in footer 
    document.querySelectorAll ('.keyboard .tile').forEach(tile => {
        let colorClass = ''

        if (lettersInRow.wrong.includes(tile.id)) colorClass = 'wrong'
        if (lettersInRow.present.includes(tile.id)) colorClass = 'present'
        if (lettersInRow.correct.includes(tile.id)) colorClass = 'correct'

        if (colorClass) tile.classList.add(colorClass)
    })

}


//tile dance 
const animateTileDance = (row) => {
	row.querySelectorAll('.tile').forEach((tile, index) => {
		tile.classList.remove('animate__bounceIn', 'animate__flipInY', 'animate__bounce')

		setTimeout(() => {
			tile.classList.add('animate__bounce', `animate__delay-${index}s`)
		}, 2500)
	})
}



//game over 

const YouLose = () => {
    let board = document.querySelector ('.board')
    board.classList.add('animate__animated', 'animate__hinge')
}

// SHAKE WHOLE ROW, WHEN YOU SUBMIT A NON-EXISTANT WORD
const animateRowShake = (row) => {
	row.classList.remove('animate__shakeX')

	setTimeout(() => {
		row.classList.add('animate__animated', 'animate__shakeX')
	},0)
}
