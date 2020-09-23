<template>
  <div>
    <span>{{ randomNumber }}</span>
    <button class="btn" @click="getRandomNumber">Generate Random Number</button>
  </div>
</template>

<script>
export default {
  props: {
    // inputs to test
    // If button is clicked, randomNumber should be between 1 (min) and 10(max)
    min: {
      type: Number,
      default: 1
    },
    max: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {
      // by default, randomNumber data value should be 0
      randomNumber: 0
    };
  },
  methods: {
    getRandomNumber() {
      this.randomNumber =
        Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
    }
  }
};
</script>
