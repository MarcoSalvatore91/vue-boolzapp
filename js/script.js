console.log('Vue ok', Vue);

Vue.config.devtools = true;

const message = new Vue({

    el: '#root',

    data: {
        
        newMessage: '',

        searchContact: '',
        
        currentIndex: 0,

        dropDown: {
                info: 'Info Messaggio',
                deleteMessage: 'Cancella Messaggio',
            },

        user: {
            name: 'Marco',
            avatar: '_io'
          },

        contacts: [
        {
            name: 'Michele',
            avatar: '_1',
            visible: true,
            messages: [{
                date: '10/01/2020 15:30:55',
                text: 'Hai portato a spasso il cane?',
                status: 'sent',
                menuDown: false,
            },
            {
            date: '10/01/2020 15:50:00',
            text: 'Ricordati di dargli da mangiare',
            status: 'sent',
            menuDown: false,
            },
            {
            date: '10/01/2020 16:15:22',
            text: 'Tutto fatto!',
            status: 'received',
            menuDown: false,
            }
            ],
        },
        {
            name: 'Fabio',
            avatar: '_2',
            visible: true,
            messages: [{
            date: '20/03/2020 16:30:00',
            text: 'Ciao come stai?',
            status: 'sent',
            menuDown: false,
            },
            {
            date: '20/03/2020 16:30:55',
            text: 'Bene grazie! Stasera ci vediamo?',
            status: 'received',
            menuDown: false,
            },
            {
            date: '20/03/2020 16:35:00',
            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent',
            menuDown: false,
            }
            ],
        },
        {
            name: 'Samuele',
            avatar: '_3',
            visible: true,
            messages: [{
            date: '28/03/2020 10:10:40',
            text: 'La Marianna va in campagna',
            status: 'received',
            menuDown: false,
            },
            {
            date: '28/03/2020 10:20:10',
            text: 'Sicuro di non aver sbagliato chat?',
            status: 'sent',
            menuDown: false,
            },
            {
            date: '28/03/2020 16:15:22',
            text: 'Ah scusa!',
            status: 'received',
            menuDown: false,
            }
            ],
        },
        {
            name: 'Matteo',
            avatar: '_4',
            visible: true,
            messages: [{
            date: '10/01/2020 15:30:55',
            text: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent',
            menuDown: false,
            },
            {
            date: '10/01/2020 15:50:00',
            text: 'Si, ma preferirei andare al cinema',
            status: 'received',
            menuDown: false,
            }
            ],
        },
        ],
    },

    // ! Functions

    
    methods: {
        
        selectContact(index) {
            this.currentIndex = index        
        },
    
        isActive(index) {
            if(this.currentIndex === index)
            return true
        },

        sendMessage() {
            this.addMessage(this.newMessage, 'sent')
            this.newMessage = ''; 
            
            setTimeout(() => { 
                this.addMessage('ok', 'received')
            }, 3000);
        },

        addMessage(text, status) {
            this.contacts[this.currentIndex].messages.push({date: '10/01/2020 15:30:55', text, status,})
        },
            
        resultContact() {
            this.contacts.filter(contact => {
                if(!contact.name.toUpperCase().includes(this.searchContact.toUpperCase())) {
                    contact.visible = false;
                } else contact.visible = true;
            })
        },

        hiddenMenu () {
            if(this.menuDown !== true){
                return true
            }
        },
    },
 })

