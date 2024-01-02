<template>
    <div class="slider py-10 max-container padding-container">
        <ul class="slide-track">
            <li class="slide"><img src="../assets/payments/bizum.svg" alt="img"></li>
            <li class="slide"><img src="../assets/payments/cashlib.svg" alt="img"></li>
            <li class="slide"><img src="../assets/payments/mastercard.svg" alt="img"></li>
            <li class="slide"><img src="../assets/payments/pay.svg" alt="img"></li>
            <li class="slide"><img src="../assets/payments/paypal.svg" alt="img"></li>
            <li class="slide"><img src="../assets/payments/paysafe.svg" alt="img"></li>
            <li class="slide"><img src="../assets/payments/visa.svg" alt="img"></li>

            <!--SAME SLIDE-->
            <li class="slide"><img src="../assets/payments/bizum.svg" alt="img"></li>
            <li class="slide"><img src="../assets/payments/cashlib.svg" alt="img"></li>
            <li class="slide"><img src="../assets/payments/mastercard.svg" alt="img"></li>
            <li class="slide"><img src="../assets/payments/pay.svg" alt="img"></li>
            <li class="slide"><img src="../assets/payments/paypal.svg" alt="img"></li>
            <li class="slide"><img src="../assets/payments/paysafe.svg" alt="img"></li>
            <li class="slide"><img src="../assets/payments/visa.svg" alt="img"></li>
        </ul>
    </div>
</template>
  
<script setup lang="ts">


</script>
  
<style scoped>
.slider {
    height: 150px;
    margin: auto;
    position: relative;
    display: grid;
    place-items: center;
    overflow: hidden;
}

.slide-track {
    display: flex;
    width: calc(150px * 14);
    animation: scroll 10s linear infinite;
}

.slide-track:hover {
    animation-play-state: paused;
}

@keyframes scroll {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(calc(-50px * 7));
    }
}

.slide {
    height: 100px;
    width: 150px;
    display: flex;
    align-items: center;
    padding: 15px;
    perspective: 100px;
}

img {
    width: 100px;
    transition: transform 1s;
}

img:hover {
    transform: translateZ(20px);
}

/* SIDES BACKGROUND OPTIONAL EFFECT  */
/* .slider::before,
.slider::after {
    background: linear-gradient(to right, rgb(49, 1, 68) 0%, rgba(255, 255, 255, 0));
    content: '';
    height: 100%;
    position: absolute;
    width: 5%;
    z-index: 2;
} */

.slider::before {
    left: 0;
    top: 0;
}

.slider::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
}
</style>
  