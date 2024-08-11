document.querySelectorAll('.question').forEach(function(question) {
    question.addEventListener('click', function() {
        const description = this.nextElementSibling;
        const toggleIcon = this.querySelector('.toggleIcon');

        if (description.classList.contains('visible')) {
            description.classList.remove('visible');
            toggleIcon.src = 'icon-plus.svg';
        } else {
            description.classList.add('visible');
            toggleIcon.src = 'icon-minus.svg';
        }

        console.log(description.classList);
    });
});

