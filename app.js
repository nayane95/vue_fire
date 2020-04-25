new Vue({
    el:'#app',
    data:{
       title : 'Becoming a Vue Ninja',
       name : 'Ryu',
       url:'yotube.com',
       classes:['one','two'],
       wage : 10
    },
    methods: {
        greet(time){
            // return 'Hello and good ${time}, ${this.name}';
            return 'Hello and good '+time+' ,'+this.name+''
        },
        changeWage(amount){
            this.wage+=amount
        }
    }
})