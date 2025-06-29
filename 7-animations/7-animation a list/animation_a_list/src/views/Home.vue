<template>
  <div>
    <Navbar />
    <h1>Welcome to the Home Page</h1>
    <button @click="addItem">add number</button>
    <ul>
      <transition-group name="fade">

        <li
          v-for="(number, index) in numbers"
          :key="number"
          @click="removeItem(index)"
        >
          {{ number }}
        </li>

      </transition-group>
    </ul>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  name: "Home",
  components: {
    Navbar,
  },
  data() {
    return {
      numbers: [1, 2, 3, 4, 5, 6],
    };
  },
  methods: {
    addItem() {
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      this.numbers.push(randomNumber);
    },
    removeItem(index) {
      this.numbers.splice(index, 1);
    },
  },
};
</script>
<style>
li {
  font-size: 22px;
  cursor: pointer;

}
/* حالت اولیه ورود (قبل از ظاهر شدن) */
.fade-enter-from{
    opacity: 0;
}

/* در طول ترنزیشن */
.fade-enter-active{
    transition: all 1s linear;
}

/* حالت نهایی ورود (بعد از کامل شدن ترنزیشن) */
.fade-enter-to{
    opacity: 1;
}
/* حالت اولیه خروج (قبل از محو شدن) */
.fade-leave-from{
    opacity: 1;

}
/* در طول ترنزیشن خروج */
.fade-leave-active{
    transition: opacity 1s linear;
    position: absolute;
}
/* حالت نهایی خروج (بعد از کامل شدن ترنزیشن) */
.fade-leave-to{
    opacity: 0;
}


/*  باید جا به جا بشن تا کار بکنه*/
.fade-move{
  transition: all 1s linear ;
}


</style>
