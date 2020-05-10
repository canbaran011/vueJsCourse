<template>
   <div class="container">
       <h2> Oh No ! You did WRONG</h2>
       <button @click="newGame">NEW GAME</button>
   </div>
</template>

<script>
export default {
    methods: {
        newGame(){
            this.$emit("activeComponentEvent" , "app-game-cards")
        }
    },
}
</script>

<style scoped>

.container{
    position: absolute;
    top:0;
    left:0;
    width: 100%;
    height: 100vh;
    background-color:darkred;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.container h2{
    text-align: center;
    font-size: 300%;
    color:#fff;
    padding: 5px;
    border :1px solid #fff;
}
.container button{
    width:200px;
    background-color: #FFF;
    color:red;
    border: 1px solid burlywood;
    font-size: 20px;
    padding: 15px 20px;
    text-align: center;
    cursor: pointer;
    border-radius: 20px;
}

.container button:hover{
    background-color: greenyellow;
    color :indianred;
    transition: all .5s;
}

    
</style>