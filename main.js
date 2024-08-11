document.querySelectorAll('.question').forEach(function(question){
    question.addEventListener ('click', function(){
        const description = this.nextElementSibling;
        const toggleIcon = this.querySelector('.toggleIcon') ;

        if(description.classList.contains('active')){
            description.classList.remove('active');
            toggleIcon.src = 'icon-plus.svg' ;

        }
        else{
            description.classList.add('active') ;
            toggleIcon.src = 'icon-minus.svg' ;
        }

    })
});