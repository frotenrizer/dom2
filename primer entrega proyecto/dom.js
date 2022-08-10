/* 
Añadir un elemento html
Fragmentos de código: document.createDocumentFragment()
*/

const jugadorex = ['raul', 'messi', 'ortegas', 'cristiano', 'modric', 'alario', 'enzo']

const title = document.getElementById('title')
const playersList = document.getElementById('playerssList')
const selectplayers = document.getElementById('playersSelect')

/* const itemList = document.createElement('LI')
itemList.textContent = 'raul' */

title.innerHTML = 'liga x - <span>goleadores<span>'

const fragment = document.createDocumentFragment(playersList)

for (const jugador of jugadorex) {
    const selectItem = document.createElement('OPTION')
    selectItem.setAttribute('value', jugador.toLowerCase())
    selectItem.textContent = jugador
    fragment.appendChild(selectItem)
}

/* appendChild(fragment) */
selectplayers.appendChild(fragment)
