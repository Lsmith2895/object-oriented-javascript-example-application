import './style.css'
import {character, hunter} from './characters.js'

document.querySelector('#app').innerHTML = `<div'> </ div>`

const newestHunter = new hunter('solar', ['solar'])
console.log('create new hunter', newestHunter)
newestHunter.setCharacterType = 'hunter'

// create a visualization for the hunter subclass
// what we want to see?
// type of character with their logo:
// active super ability
// available super abilities