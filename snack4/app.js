const { createApp } = Vue

createApp({
    data() {
        return {
            userInput: '',
            sum: 0,



        }
    },
    methods: {
        callRandomArray(itemNumber) {
            axios.get('https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=100&items=' + itemNumber)
                .then((response) => {
                    console.log(response.data.response);
                    const numbers = response.data.response;

                    numbers.forEach(element => {
                        this.sum += element;
                        console.log(this.sum);

                    });



                })
        }

    }



}).mount('#app')





















/* Chiedere all'utente quanti elementi vuole includere nell'array.
 Generare attraverso l'API (array/integers) un array contenente N numeri compresi tra 1 e 100.
 Stampare a schermo la somma dei numeri generati. */