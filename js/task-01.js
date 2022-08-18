const ulEL = document.querySelectorAll('.item');
console.log ('Number of categories:',ulEL.length)
    for (const ul of ulEL) {
        console.log('Category:', ul.firstElementChild.textContent);
        console.log('Elements:', ul.lastElementChild.children.length);
        console.log('Elements name:', ul.lastElementChild.textContent);
}
    

// const getDescription = list => {
//     for (const ul of ulEL) {
//         console.log('Category:', ul.firstElementChild.textContent);
//         console.log('Elements:', ul.lastElementChild.children.length);
//     }
// };
// getDescription(ulEL);