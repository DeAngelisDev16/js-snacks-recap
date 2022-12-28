const { createApp } = Vue

createApp({
  data() {
    return {
      myInput: '',
      messages: [
        {
          text: 'ciao',
          status: 'sent',
        },
        {
          text: 'come stai?',
          status: 'sent',

        },
        {
          text: 'ciao, bene grazie',
          status: 'received',

        }
      ]


    }
  },
  methods: {
    addNewMessage(content) {
      const messageObj = {
        text: this.myInput,
        status: 'sent',
      }
      this.messages.push(messageObj);
      this.myInput = '';
      axios.get('https://flynn.boolean.careers/exercises/api/random/sentence')
        .then((response) => {
          console.log(response.data.response);
          const newReceivedMessage = {
            text: response.data.response,
            status: 'received'
          }
          this.messages.push(newReceivedMessage)


        })

    }

  },
  created() {


  }
}).mount('#app')

/* /** Creare un input che permetta all'utente di inserire un messaggio e aggiungerlo ad una conversazione (tipo whatsapp).
 Dopo averlo aggiunto chiedere all'API una frase random (attraverso random/sentence) aggiungendo anch'essa al thread,
 differenziando i messaggi utente da quelli del computer. */


