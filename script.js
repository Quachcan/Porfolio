function scrolltoElement(elementSelector, instance = 0){

    const elements = document.querySelectorAll(elementSelector);

    if(elementSelector.length > instance) {
        elements[instance].scrollIntoView({ behavior: 'smooth'});
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");

link1.addEventListener('click', () => {
    scrolltoElement('.header');
})
link2.addEventListener('click', () => {
        // Scroll to the second element with "header" class
    scrolltoElement('.header', 1);
})