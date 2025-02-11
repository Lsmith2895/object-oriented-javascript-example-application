import './style.css'
import { counter } from './counter.js'

document.querySelector('#app').innerHTML = `<div className='counter'> </ div>`

const count = new counter(17, 500)

console.log('this is the count object ', count);
console.log('this is the current count ',count.getCount)
console.log('update the count', count.setCount(777))