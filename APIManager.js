//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {}
    }

    loadData(){
        //you should make all your API requests here
        //each request should update the `data` object accordingly
       $.ajax({
            method: "GET",
              url: `https://randomuser.me/api/?format=pretty`,
            success: (userData) => {
                
                let user = {
                    picture: userData.results[0].picture.medium,
                    first: userData.results[0].name.first,
                    last: userData.results[0].name.last,
                    city: userData.results[0].location.city,
                    state: userData.results[0].location.state
                }

                this.data.user = user
                
            } ,
            error: function (xhr, text, error) {
                console.log(text)
            }
        })
       
        
            
            $.ajax({
                method: "GET",
                  url: "https://randomuser.me/api/?results=6",
                success: (data) =>{
                    let friends = []
                    for (let i=0 ; i<6 ; i++){
                        let a = data.results[i]
                        friends.push({
                            first: a.name.first,
                            last: a.name.last
                        })             
                    }
                    this.data.myfriends= friends
                } ,
                error: function (xhr, text, error) {
                    console.log(text)
                }
            })
        

        $.ajax({
            method: "GET",
              url: `http://quotes.rest/qod.json`,
            success: (quote) => {
                let q = {
                    quote: quote.contents.quotes[0].quote,
                    author: quote.contents.quotes[0].author
                }
                this.data.q = q
            } ,
            error: function (xhr, text, error) {
                console.log(text)
            }
        })
          
        $.ajax({
            method: "GET",
              url: `https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random()*(100 - 1))}`,
            success: (pokemon) => {
                let pok = {
                    image: pokemon.sprites.front_default,
                    name: pokemon.name
                }
                
                this.data.pok = pok
            } ,
            error: function (xhr, text, error) {
                console.log(text)
            }
        })


        $.ajax({
            method: "GET",
              url: `https://baconipsum.com/api/?type=meat-and-filler&paras=3`,
            success: (text)=>{
                this.data.meatText = {text}
            } ,
            error: function (xhr, text, error) {
                console.log(text)
            }
        })

    }
}

