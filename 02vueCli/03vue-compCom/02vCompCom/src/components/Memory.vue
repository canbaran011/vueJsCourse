<template>
    <div>
        <p class="text-center">Bu bir anidir.</p>
        <p> {{content}} </p>
       <div>
           <slot name="heading"></slot>
        </div>
        <div>
           <slot></slot>
        </div> 
        <div>
            <slot name="author">
                <h5>Author</h5>
                <p> no content </p>
            </slot>
        </div>
    </div>
  
</template>
<script>
export default {
    props:["content"]
}
</script>


<style scoped>
div{
border : 1px solid #ccc;
box-shadow: 1px 1px 2px #666;
padding: 20px 20px;
margin-top: 10px;
border-radius: 15px ;
}


</style>

