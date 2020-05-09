<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>VueJS ile gelen directive tanimlari</h3>
        <p v-text="'Deneme Yanilma Metodu'"></p>
        <p v-html="'<strong>Bu bir v-html</strong>'"></p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Custom directiveS</h3>
        <p v-color:background.delay="'green'">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto autem
          commodi aut esse facilis architecto!
        </p>

        <p v-color.delay.flash="'blue'">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto autem
          commodi aut esse facilis architecto!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    color: {
      bind(el, binding, vnode) {
        let delay = 0;
        if (binding.modifiers["delay"]) {
          delay = 2000;
        }
        if (binding.modifiers["flash"]) {
          let firstColor = binding.value;
          let secondColor= "#fbbd08";
          let currentColor= firstColor;

          setTimeout(() => {
            setInterval(() => { 
            //  console.log("color change");
             
             currentColor == secondColor ? currentColor = firstColor : currentColor = secondColor;
              if (binding.arg == "background") {
              el.style.backgroundColor = currentColor;
            } else {
              el.style.color = currentColor;
            }
            }, 1000);
          }, delay);

        } else {
          setTimeout(() => {
            if (binding.arg == "background") {
              el.style.backgroundColor = binding.value;
            } else {
              el.style.color = binding.value;
            }
          }, delay);
        }
      },
    },
  },
};
</script>

<style></style>
