document.addEventListener('DOMContentLoaded', (event) => {
    const blocks = document.getElementsByClassName('container-block');
    const hiddenNegatives = document.getElementsByClassName('negative');

    for(let i = 0; i < blocks.length; i++) {
        blocks[i].addEventListener('mouseover', function handleMouseOver() {
            hiddenNegatives[i].style.visibility = 'visible';
        });

        blocks[i].addEventListener('mouseout', function handleMouseOut() {
            hiddenNegatives[i].style.visibility = 'hidden';
        });
    }
});