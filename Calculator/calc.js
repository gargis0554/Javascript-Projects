let calculation=localStorage.getItem('calculation') || '';
    displayCalculation();
    function UpdateCalculation(value){
        calculation+=value;
        displayCalculation();

        localStorage.setItem('calculation', calculation);
    }
    function displayCalculation(){
        document.querySelector('.js-calculation')
            .innerHTML=calculation;
    }