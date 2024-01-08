<script setup lang="ts">
import auto from '../assets/footer/auto.svg'
import skillonnet from '../assets/footer/skillonnet.svg'
import ego from '../assets/footer/ego.svg'
import techlabs from '../assets/footer/techlabs.svg'
import eighteen from '../assets/footer/eighteen.svg'
import jugarbien from '../assets/footer/jugarbien.svg'
import autopro from '../assets/footer/autopro.svg'
import juegoseguro from '../assets/footer/juegoseguro.svg'


interface Footer_img {
  id: number;
  image: string;
}

const imgs: Footer_img[] = [
  { id: 1, image: skillonnet },
  { id: 2, image: ego },
  { id: 3, image: auto },
  { id: 4, image: techlabs },
  { id: 5, image: eighteen },
  { id: 6, image: jugarbien },
  { id: 7, image: autopro },
  { id: 8, image: juegoseguro },
]
</script>

<template>
  <div class="my-10">
    <div class="flexCenter flex-col">
      <!-- <son-license-logos class="my-5"></son-license-logos> -->
      <ul
        class="flexCenter gap-10 max-container padding-container border-b border-preto/70 py-10 xl:flex-nowrap flex-wrap">
        <li v-for="item in imgs" :key="item.id" class="w-[200px] flexCenter flex-col lg:flex-row"><img :src="item.image"
            class="cursor-pointer">
        </li>
      </ul>
      <div><img src="../assets/footer/securesite.svg" class="w-[100px]"></div>
      <div class="text-white max-container padding-container m-10">
        <p class="mb-10">Jugar juegos con dinero real requiere el registro de una cuenta.El acceso a los sitios online de
          juego con
          dinero real está prohibido por las personas incluidas en el Artículo 6.2 (a) y la Ley 13/2011, de 27 de mayo,
          sobre la regulación de los juegos.</p>
        <p class="mb-10">Skill On Net S.A. Calle Carlos De Arellano, 27, 52003 Melilla, Spain es el titular de las
          licencias emitidas
          por la Dirección General de Ordenación del Juego. Para obtener más información, por favor haga click aqui</p>
        <p>Las apuestas pueden generar hábitos adictivos; juegue de forma responsable.</p>
      </div>
    </div>
  </div>
</template>
