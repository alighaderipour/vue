<template>
  <nav class="glass-navbar">
    <router-link to="/">Home</router-link>
    <router-link to="/test">Go to Test Page</router-link>
  </nav>

</template>

<script>
export default {
  name: 'Navbar',
  data(){
    return{
     
    }
  }
}
</script>

<style scoped>
/* Entry animation */
@keyframes fadeSlideDown {
  from {
    opacity: 0;
    transform: translateY(-12px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.glass-navbar {
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
  animation: fadeSlideDown 0.4s ease-out;
  margin: 1rem auto;
  max-width: 95%;
  transition: all 0.3s ease-in-out;
}

/* Router links */
router-link {
  color: #e0e0e0;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  padding: 0.6rem 1.2rem;
  border-radius: 12px;
  transition: all 0.25s ease;
  position: relative;
}

/* Hover + focus effects */
router-link:hover,
router-link:focus {
  background: rgba(255, 255, 255, 0.15);
  color: #4fc3f7;
  transform: translateY(-2px);
}

/* Active link styles */
router-link.router-link-active {
  color: #4fc3f7;
  background: rgba(255, 255, 255, 0.2);
  font-weight: 600;
}

/* Underline animation */
router-link::after {
  content: '';
  position: absolute;
  height: 2px;
  width: 0%;
  left: 0;
  bottom: -4px;
  background-color: #4fc3f7;
  transition: width 0.3s ease;
}

router-link:hover::after,
router-link.router-link-active::after {
  width: 100%;
}

/* Responsive stacking */
@media (max-width: 768px) {
  .glass-navbar {
    flex-direction: column;
    align-items: stretch;
    gap: 0.75rem;
    padding: 1rem;
  }

  router-link {
    text-align: center;
    padding: 0.75rem;
    font-size: 1rem;
  }
}
</style>
