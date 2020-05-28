<template>
  <div>
    <!-- <p>   {{selectedCard}}    </p> -->
    <div class="game-area">
      <p>{{ answer }}</p>
      <h2 class="title">Where is <span>Pogaca</span> <strong> ?</strong></h2>
      <h4 class="description">
        Choose one of open cards and click the closed card..
      </h4>
      <!-- game cards component -->
      <div class="container">
        <transition-group appear name="rotate-all" class="card-container">
          <app-card
            :class="{ shadow: selectedCard == card.id }"
            @click.native="selectedCard = card.id"
            :key="card.id"
            v-for="card in cards"
            :card="card"
          >
          </app-card>
        </transition-group>
      </div>
      <!-- default card component -->

      <div class="container">
        <transition name="rotate" mode="out-in">
          <component
            :card="answer"
            @click.native="showCard(answer)"
            :is="activeCard"
          >
          </component>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "./Card";
import DefaultCard from "./DefaultCard";

export default {
  components: {
    appCard: Card,
    appDefaultCard: DefaultCard,
  },
  data() {
    return {
      answer: {},
      activeCard: "app-default-card",
      selectedCard: null,
      cards: [
        { id: 1, component: "app-card", image: "/src/assets/card-1.jpg" },
        { id: 2, component: "app-card", image: "/src/assets/card-2.jpg" },
        { id: 3, component: "app-card", image: "/src/assets/card-3.jpg" },
        { id: 4, component: "app-card", image: "/src/assets/card-4.jpg" },
        { id: 5, component: "app-card", image: "/src/assets/card-5.jpg" },
      ],
    };
  },
  created() {
    let answer = Math.ceil(Math.random() * this.cards.length);
    this.answer = this.cards[answer - 1];
    console.log(this.answer);
  },
  methods: {
    showCard(answer) {
      if (this.selectedCard == null) {
        alert("First choose a card");
      } else {
        this.activeCard = answer.component;
        setTimeout(() => {
          if (answer.id == this.selectedCard) {
            // alert("Yeah You Did It..");
            this.$emit("activeComponentEvent", "app-celebrate");
          } else {
            // alert("Oops You Failed..");
            this.$emit("activeComponentEvent", "app-failure");
          }
        }, 1000);
      }
    },
  },
};
</script>

<style scoped>
.title {
  text-align: center;
  color: rosybrown;
}
.title span {
  color: mediumvioletred;
}
.title strong {
  color: darkred;
}
.description {
  color: gray;
  text-align: center;
}

.container,
.card-container {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.shadow {
  box-shadow: 0px 5px 48px #00646d !important;
  transition: box-shadow 0.45s;
  border-radius: 15px;
}

/* Open Card Animations Comes Here */
.rotate-all-enter {
}
.rotate-all-enter-active {
  animation: rotate-all ease-in-out 2s forwards;
}
.rotate-all-leave {
}
.rotate-all-leave-active {
}

@keyframes rotate-all {
  from {
    transform: rotateY(0);
  }
  to {
    transform: rotateY(360deg);
  }
}
/*  Closed Card options */
.rotate-enter {
}
.rotate-enter-active {
  animation: rotate-in 0.4s ease-in-out forwards;
}
.rotate-leave {
}
.rotate-leave-active {
  animation: rotate-out 0.4s ease-in-out forwards;
}

@keyframes rotate-in {
  from {
    transform: rotateY(90deg);
  }
  to {
    transform: rotateY(0deg);
  }
}
@keyframes rotate-out {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(90deg);
  }
}
</style>
