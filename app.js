var vue = new Vue({
    el: '#app',
    data: {
        tweets:[],
        author:"",
        message:"",
        tweetId:null,
        tweetAuthor:"", 
        tweetsAuthor:[],
        tweetsWord:[],
        tweet:null
    },
    methods: { 
        resetTweets: function() {
            var url = 'https://fake-tweets-api.herokuapp.com/tweets/reset';
            this.$http.get(url).then(response => {
                this.tweets= response.body;
                
            })
            .catch(error => {  })
        },
        post:function(){
           
            this.$http.post('https://fake-tweets-api.herokuapp.com/tweets',{
                author:this.author,
                message:this.message,
                
            })
            .then(response => { console.log(response)})
            .catch(error => {  })
            
        },
       
        loadTweets: function() {
            var url = 'https://fake-tweets-api.herokuapp.com/tweets';
            this.$http.get(url).then(response => {
                this.tweets= response.body;
                
            })
            .catch(error => {  })
        },
        deleteTweet: function() {
            var url = 'https://fake-tweets-api.herokuapp.com/tweets/'+ this.tweetId;
            this.$http.delete(url).then(response => {
                this.tweets=response.body
            })
            .catch(error => {  })
        },
        getTweetByAuthor: function() {
            var url = 'https://fake-tweets-api.herokuapp.com/tweets/?author='+ this.tweetAuthor;
            this.$http.get(url).then(response => {
                this.tweetsAuthor=response.body
            })
            .catch(error => {  })
        },
        getTweetByWord: function() {
            var url = 'https://fake-tweets-api.herokuapp.com/tweets/?word='+ this.tweetWord;
            this.$http.get(url).then(response => {
                this.tweetsWord=response.body
            })
            .catch(error => {  })
        },
        getTweetById: function() {
            var url = 'https://fake-tweets-api.herokuapp.com/tweets/'+ this.tweetId;
            this.$http.get(url).then(response => {
                this.tweet=response.body
            })
            .catch(error => {  })
        },
       
    },
    created: function() {
        
        
        this.loadTweets();
    },
   
})