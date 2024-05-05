let accordeons = document.querySelectorAll('.accordeon')

/*
for (let i = 0; i < accordeons.length; i++) {
    const accordeon = accordeons[i];
    accordeon.addEventListener('click', function() {
        console.log('Test' + i);
    })
}
*/

accordeons.forEach(function (accordeon) {
    accordeon.addEventListener('click', function() {
        this.classList.toggle('open')
    })
})