<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Animation ve Transition</h3>
        <hr />

        <select class="form-control" v-model="activeEffect">
          <option value="fade">fade</option>
          <option value="slide">slide</option>
        </select> <br>

        <button @click="show = !show" class="btn btn-primary">
          Goster / Gizle
        </button>

    

        <br />
        <br />

        <transition :name="activeEffect">
          <!--transition bir element uzerinde kullanilabilir or trstn group-->
          <div v-if="show" class="alert alert-success">
            Succes Kutusu
          </div> 
        </transition>

       <hr>

        <transition name="slide" type="animation" appear> <!-- onload -->
          <div v-show="show" class="alert alert-danger">
            Succes Kutusu
          </div>
        </transition>
        <hr>

         <transition 
         enter-class=""
         enter-active-class="animated swing"
         leave-class=""
         leave-active-class="animated wobble"
         > 
          <div v-show="show" class="alert alert-success">
            Success Kutusu son
          </div>
        </transition>
          <br /> <hr>

        <transition name="fade" mode="out-in">
          <div v-if="show" key="success" class="alert alert-success">Succes Kutusu // more than one el</div> 
          <div v-else key="danger" class="alert alert-danger">Alert Kutusu // more than one el</div> 
        </transition>
<hr>

 <button @click="showJS = !showJS" class="btn btn-primary">
          Goster / Gizle
        </button>
        <br />
        <transition
        :css="false"
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @after-enter-cancelled="afterEnterCancelled"
        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
        @after-leave-cancelled="afterLeaveCancelled"
        >
          <div v-if="showJS" style="width:300px; background-color:#fbbd08; border:1px solid #000; height:100px; " >
            Succes Kutusu
          </div> 
        </transition>
        <hr>
        <h3>Dinamik Componentler arasi Gecis</h3>
        <button @click="activeComponent = 'appHome'" class="btn btn-danger" >Home</button>
        <button @click="activeComponent = 'appPost'" class="btn btn-primary" >Post</button>
        <br>
        <transition name="fade" mode="out-in"> 
        <component :is="activeComponent"></component>  
        </transition>
        <hr>
        <button class="btn btn-danger" @click="addItem">Add Element</button>
        <br>
        <ul class="list-group">
          <transition-group name="slide">
          <li v-for="(number , index) in numberList" :key="number"  @click="removeItem(index)" class="list-group-item"> {{number}} </li>
          
          </transition-group>
        </ul>
      
      
      </div>
    </div>
  </div>
</template>

<script>
import Post from './components/Post';
import Home from './components/Home';

export default {
  components: {
      appPost : Post,
      appHome : Home
  },
  data() {
    return {
      show: false,
      activeEffect : "fade",
      showJS : false,
      elementWidth : 100,
      activeComponent : "appPost",
      numberList : [1,2,3,4,5,6,7,8]
    };
  },
  methods: {
    addItem(){
      const position = Math.floor(Math.random() * this.numberList.length)
      this.numberList.splice(position , 0, this.numberList.length + 1); 
    
    },
    removeItem(index){
      this.numberList.splice(index,1);
    },
    beforeEnter(el){
      console.log('beforeEnter');
      this.elementWidth =100;
      el.style.width = this.elementWidth + "px";
    },
    enter(el,done){
      console.log('enter');
      let round =1;
      const interval = setInterval(() => {
        el.style.width = (this.elementWidth + round *10)+"px";
        round++;
        if(round > 20 ){
          clearInterval(interval);
                  done();

        }
      }, 50);
    },
    afterEnter(el){
      console.log('afterEnter')

    },
    afterEnterCancelled(el){
      console.log('afterEnterCancelled')

    },
    beforeLeave(el){
       this.elementWidth =300;
      el.style.width = this.elementWidth + "px";
      console.log('beforeLeave')

    },
    leave(done){
      console.log('leave')
       let round =1;
      const interval = setInterval(() => {
        el.style.width = (this.elementWidth -  round *10)+"px";
        round++;
        if(round > 20 ){
          clearInterval(interval);
                  done();

        }
      }, 50);

    
    },
    afterLeave(el){
      console.log('afterLeave')

    },
    afterLeaveCancelled(el){
      console.log('afterLeaveCancelled')
      
    }
  },
};
</script>

<style>
/* fade */
.fade-enter{
    opacity: 0;
}
.fade-enter-active{
    transition: opacity 2s;
}
.fade-leave{
    opacity: 1; /**/ 
}
.fade-leave-active{
    transition: opacity 1s ;
    opacity: 0;
}
/* slide */
.slide-enter{
  opacity: 0;
}
.slide-enter-active{
  animation: slide-in 1s ease-out forwards ;
  transition: opacity 0.5s;
}

.slide-leave{

}
.slide-leave-active{
    animation: slide-out 1s ease-out forwards ;
    transition: opacity 1s ;
    opacity: 0;
    position: absolute;

}
.slide-move{
  transition: transform 1s;
}

@keyframes slide-in{
  from{
    transform: translateY(20px) ;
    
  }
  to{
    transform: translateY(0px) ;

  }
}
@keyframes slide-out{
  from{
    transform: translateY(0px) ;
    
  }
  to{
    transform: translateY(20px) ;

  }
}


</style>
