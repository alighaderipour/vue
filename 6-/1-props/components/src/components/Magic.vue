<template>
    <div class="magic-container" :class="{ 'dark-mode': darkMode }">
      <!-- Magical Title -->
      <h1 
        class="magic-title"
        @mouseover="sparkleTitle"
        @animationend="resetTitle"
        :class="{ 'sparkling': isTitleSparkling }"
      >
        {{ title }}
      </h1>
  
      <!-- Fairy Dust Button -->
      <button 
        class="magic-button"
        @click="castSpell"
        @mouseenter="startFairyDust"
        @mouseleave="stopFairyDust"
      >
        ✨ Cast a Spell ✨
      </button>
  
      <!-- Spell Effects -->
      <transition name="spell">
        <div v-if="spellCast" class="spell-effect">
          <div 
            v-for="(particle, index) in particles" 
            :key="index"
            class="particle"
            :style="particleStyle(particle)"
          ></div>
        </div>
      </transition>
  
      <!-- Magical Creature -->
      <div 
        class="creature"
        :style="{ transform: `scale(${creatureSize})` }"
        @click="feedCreature"
      >
        🦄
      </div>
      <p class="creature-hint">Click the unicorn to feed it!</p>
  
      <!-- Mode Toggle -->
      <button class="mode-toggle" @click="toggleDarkMode">
        {{ darkMode ? '☀️ Light Mode' : '🌙 Dark Mode' }}
      </button>
  
      <!-- Secret Message -->
      <transition name="fade">
        <p v-if="showSecret" class="secret-message">
          You found the magic! {{ secretMessage }}
        </p>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MagicComponent',
    data() {
      return {
        title: 'Vue Magic Realm',
        isTitleSparkling: false,
        spellCast: false,
        particles: [],
        creatureSize: 1,
        darkMode: false,
        showSecret: false,
        secretMessage: '',
        fairyDustInterval: null,
        messages: [
          "The magic is in you!",
          "Wizards love Vue!",
          "Your code is enchanting!",
          "Abracadabra!",
          "Expecto Patronum!"
        ]
      }
    },
    methods: {
      sparkleTitle() {
        this.isTitleSparkling = true;
      },
      resetTitle() {
        this.isTitleSparkling = false;
      },
      castSpell() {
        this.spellCast = true;
        this.createParticles();
        
        // Random secret message
        this.secretMessage = this.messages[Math.floor(Math.random() * this.messages.length)];
        this.showSecret = true;
        
        setTimeout(() => {
          this.spellCast = false;
          this.particles = [];
        }, 2000);
        
        setTimeout(() => {
          this.showSecret = false;
        }, 4000);
      },
      createParticles() {
        for (let i = 0; i < 50; i++) {
          this.particles.push({
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 10 + 5,
            color: `hsl(${Math.random() * 360}, 100%, 70%)`,
            animationDelay: Math.random() * 2
          });
        }
      },
      particleStyle(particle) {
        return {
          left: `${particle.x}%`,
          top: `${particle.y}%`,
          width: `${particle.size}px`,
          height: `${particle.size}px`,
          backgroundColor: particle.color,
          animationDelay: `${particle.animationDelay}s`
        };
      },
      feedCreature() {
        this.creatureSize += 0.1;
        if (this.creatureSize > 2) {
          this.creatureSize = 1;
          this.title = "Vue Magic Realm (Burp!)";
          setTimeout(() => {
            this.title = "Vue Magic Realm";
          }, 1000);
        }
      },
      toggleDarkMode() {
        this.darkMode = !this.darkMode;
      },
      startFairyDust() {
        let count = 0;
        this.fairyDustInterval = setInterval(() => {
          if (count++ > 10) {
            this.stopFairyDust();
            return;
          }
          this.particles.push({
            x: Math.random() * 30 + 35,
            y: 80,
            size: Math.random() * 8 + 2,
            color: `hsl(${Math.random() * 60 + 40}, 100%, 70%)`,
            animationDelay: 0
          });
        }, 100);
      },
      stopFairyDust() {
        clearInterval(this.fairyDustInterval);
      }
    },
    beforeUnmount() {
      this.stopFairyDust();
    }
  }
  </script>
  
  <style scoped>
  .magic-container {
    max-width: 800px;
    margin: 2rem auto;
    padding: 2rem;
    text-align: center;
    font-family: 'Comic Sans MS', cursive, sans-serif;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    border-radius: 20px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    transition: all 0.5s ease;
    position: relative;
    overflow: hidden;
  }
  
  .magic-container.dark-mode {
    background: linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%);
    color: #f8f8f8;
  }
  
  .magic-title {
    font-size: 3rem;
    color: #6a3093;
    margin-bottom: 2rem;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
  }
  
  .magic-title.sparkling {
    animation: sparkle 0.5s ease-out;
    color: #ff6b6b;
    text-shadow: 0 0 10px #ffd166;
  }
  
  @keyframes sparkle {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }
  
  .magic-button {
    background: linear-gradient(45deg, #ff6b6b, #ffa3a3);
    color: white;
    border: none;
    padding: 1rem 2rem;
    font-size: 1.2rem;
    border-radius: 50px;
    cursor: pointer;
    box-shadow: 0 4px 15px rgba(255, 107, 107, 0.4);
    transition: all 0.3s ease;
    margin: 1rem;
    position: relative;
    overflow: hidden;
  }
  
  .magic-button:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(255, 107, 107, 0.6);
  }
  
  .magic-button:active {
    transform: translateY(1px);
  }
  
  .spell-effect {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }
  
  .particle {
    position: absolute;
    border-radius: 50%;
    animation: float-up 2s ease-out forwards;
    opacity: 0.8;
  }
  
  @keyframes float-up {
    0% { transform: translateY(0) scale(1); opacity: 0.8; }
    100% { transform: translateY(-100px) scale(0.5); opacity: 0; }
  }
  
  .creature {
    font-size: 4rem;
    margin: 2rem 0;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-block;
  }
  
  .creature:hover {
    transform: rotate(10deg);
  }
  
  .creature-hint {
    font-size: 0.9rem;
    color: #666;
    margin-bottom: 2rem;
  }
  
  .mode-toggle {
    background: transparent;
    border: 2px solid #6a3093;
    color: #6a3093;
    padding: 0.5rem 1rem;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 2rem;
  }
  
  .dark-mode .mode-toggle {
    border-color: #f8f8f8;
    color: #f8f8f8;
  }
  
  .mode-toggle:hover {
    background: rgba(106, 48, 147, 0.1);
  }
  
  .secret-message {
    margin-top: 2rem;
    font-size: 1.2rem;
    color: #ff6b6b;
    animation: pulse 2s infinite;
  }
  
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.05); }
    100% { transform: scale(1); }
  }
  
  /* Transitions */
  .spell-enter-active, .spell-leave-active {
    transition: opacity 1s;
  }
  .spell-enter, .spell-leave-to {
    opacity: 0;
  }
  
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  </style>