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
      messageObj = {
        text: this.myInput,
        status: 'sent',
      },
        this.messages.push(messageObj);
      this.myInput = '';

    }

  },
  created() {


  }
}).mount('#app')

/* /** Creare un input che permetta all'utente di inserire un messaggio e aggiungerlo ad una conversazione (tipo whatsapp).
 Dopo averlo aggiunto chiedere all'API una frase random (attraverso random/sentence) aggiungendo anch'essa al thread,
 differenziando i messaggi utente da quelli del computer. */


/* axios.get('/user?ID=12345')
 .then(function (response) {
   // handle success
   console.log(response);
 }) */