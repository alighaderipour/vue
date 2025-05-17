<script>
export default {
  name: "app",
  data() {
    return {
      flag: false,
    };
  },
  methods: {
    beforeEnter(el) {
      console.log("🚀 ~ beforeEnter ~ el:", el);
    },
    enter(el) {
      console.log("🚀 ~ enter ~ el:", el);
    },
    afterEnter(el) {
      console.log("🚀 ~ afterEnter ~ el:", el);
    },
    beforeLeave(el) {
      console.log("🚀 ~ beforeLeave ~ el:", el);
    },
    leave(el) {
      console.log("🚀 ~ leave ~ el:", el);
    },
    afterLeave(el) {
      console.log("🚀 ~ afterLeave ~ el:", el);
    },
    enterCancelled(el) {
      console.log("🚀 ~ enterCancelled ~ el:", el);
    },
    leaveCancelled(el) {
      console.log("🚀 ~ leaveCancelled ~ el:", el);
    },
  },
};
</script>

<template>
  <div>
    <button type="button" @click="this.flag = !this.flag">toggle</button>
    <Transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @enter-cancelled="enterCancelled"
      @leave-cancelled="leaveCancelled"
      :css="true"
      name="fade"
    >
      <h2 v-if="flag">hey</h2>
    </Transition>
  </div>
</template>

<style>
h2 {
  width: 400px;
  padding: 20px;
  margin: 20px;
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
}
/* حالت نهایی خروج (بعد از کامل شدن ترنزیشن) */
.fade-leave-to{
    opacity: 0;
}

/*
| توضیح کوتاه                  | کلاس                      |
| -------------------- | --------------------------------- |
| `.fade-enter-from`   | شروع ورود، عنصر نامرئیه          |
| `.fade-enter-active` | ترنزیشن نرم در ورود              |
| `.fade-enter-to`     | پایان ورود، عنصر کامل دیده می‌شه |
| `.fade-leave-from`   | شروع خروج، عنصر دیده می‌شه       |
| `.fade-leave-active` | ترنزیشن نرم در خروج              |
| `.fade-leave-to`     | پایان خروج، عنصر محو می‌شه       |
| `.zoom-enter-active` | اجرای انیمیشن ورود با scale      |
| `.zoom-leave-active` | اجرای انیمیشن خروج با scale      |

*/

.zoom-enter-from{
    opacity: 0;
}

/* در طول ترنزیشن */
.zoom-enter-active{
    animation:zoom-in linear 1s forwards ;
    transition: all 1s linear;
}

/* حالت نهایی ورود (بعد از کامل شدن ترنزیشن) */
.zoom-enter-to{
    
}
/* حالت اولیه خروج (قبل از محو شدن) */
.zoom-leave-from{
    

}
/* در طول ترنزیشن خروج */
.zoom-leave-active{
    animation:zoom-out linear 1s forwards ;
    transition: all 1s linear;
}
/* حالت نهایی خروج (بعد از کامل شدن ترنزیشن) */
.zoom-leave-to{
    opacity: 0;
}

@keyframes zoom-in {
  from {
    transform: scale(0, 0);
  }
  to {
    transform: scale(1, 1);
  }
}
@keyframes zoom-out {
  from {
    transform: scale(1, 1);
  }
  to {
    transform: scale(0, 0);
  }
}</style>
