const { createApp } = Vue  //creo un objeto VUE llamdo createApp

createApp({
  data() {
    return {
      url: 'https://api.sampleapis.com/coffee/hot',
      
    //agrego el item todas en el combo CURs
    //uso CURS para el combos del filtro
          CURs: [],

    //los uso para el asincronismo
          RECAll: [],
          REC: [],

    }
  },
  methods: {
    async fetchData(url) {  
      // necesite un async y await porque seguia de largo y no 
      // cargaba el array recipes ni las listas desplegables
      resp = await fetch(url)
      this.RECAll = await resp.json()

      //esto muestra automaticamente EN PANTALLA
      //todos los datos encontrados en la API
      //this.REC = this.RECAll

    },

//este es que busca el café    
    filtro() {
      this.REC = this.RECAll.filter( 
          elemento=>
         (elemento.title == this.CUR ))


    },

//este carga el combo 
    cargarListasDesplegables() {
      
      for (elemento of this.RECAll) 

//comparo el item del menu con la key del json elemento.title
      {        
        if (this.CURs.indexOf(elemento.title) < 0) 
        {
          this.CURs.push(elemento.title)
        }
      }
    }
  },
  async created() {
    await this.fetchData(this.url)
    this.cargarListasDesplegables()
  }
}).mount('#app')

