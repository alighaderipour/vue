<script>
export default {
  name: "App",
  data() {
    return {
      flag: true,
    };
  },
  methods: {
    flagToggle() {
      return (this.flag = !this.flag);
    },
  },
};
</script>

<template>
  <div>
    <button type="button" @click="flagToggle">
      {{ flag ? "bye" : "hello" }}
    </button>
    <!-- animation with css transition -->
    <div>
      <Transition name="fade" duration="1000" mode="out-in" >
        <h1 v-if="flag" key="main">hello</h1>
        <h1 v-else key="secondary">bye</h1>
      </Transition>
      <hr />
      <hr />
    </div>
    <!-- animation with cc animation -->
    <Transition name="zoom" duration="1000" type="animation" appear>
      <h2 v-show="flag">hello world!</h2>
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
}
</style>
