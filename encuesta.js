new Vue({
    el:'#seccion',data:{sn:'',tiemp:'',motiva:'',expe:'',lengua:'',lenguas:[],res: true},
    methods:{
        agregar(){this.lenguas.push(this.lengua);this.lengua='';},
        res1(){if(this.sn=="Si"){this.res=true;}else{this.res=false;}}
    }   });