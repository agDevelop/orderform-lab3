<template>
  <div>
    <NuxtLayout>
      <div
        class="flex justify-center items-center text-start text-xl ml-6 h-12"
      >
        <b>Гончаров A.H. 224-372</b>
      </div>
      <div class="flex flex-col gap-2 justify-center items-center mt-8">
        <div class="flex flex-col rounded-md shadow-sm">
          <button
            type="button"
            :class="[
              thing.selected
                ? 'bg-emerald-400 text-emerald-200 border-emerald-300'
                : 'bg-white text-rose-400 border-rose-300',
              '-mt-px py-3 px-4 inline-flex  items-center gap-x-2 text-sm font-medium first:rounded-t-md last:rounded-b-md focus:z-10 border  shadow-sm disabled:opacity-50  disabled:pointer-events-none',
            ]"
            as="template"
            v-for="thing in things"
            :key="thing.id"
            :value="thing"
            @click="
              thing.selected = !thing.selected;
              calcTotal();
            "
          >
            <div class="grid grid-cols-7 items-center w-80 h-6 gap-6">
              <b
                :class="[
                  thing.selected ? 'text-white' : 'text-rose-800',
                  'text-start col-span-4',
                ]"
                >{{ thing.title }}</b
              >
              <i class="text-start col-span-2">${{ thing.price }}</i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="w-4 h-4 inline"
              >
                <path
                  v-show="thing.selected"
                  fill-rule="evenodd"
                  d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353   4.493-6.74a.75.75 0 0 1 1.04-.207Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </button>
        </div>
        <b class="w-[300px] text-end"> Общая цена: ${{ totalPrice }}</b>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { ref } from "vue";

const thingsList = [
  {
    id: 0,
    title: "Веб разработка",
    price: 300,
    selected: false,
  },
  {
    id: 1,
    title: "Дизайн",
    price: 400,
    selected: false,
  },
  {
    id: 2,
    title: "Интеграция",
    price: 250,
    selected: false,
  },
  {
    id: 3,
    title: "Обучение",
    price: 220,
    selected: false,
  },
];

var things = ref(thingsList);

var totalPrice = 0;

function calcTotal() {
  totalPrice = things.value.reduce((acc, e) => {
    return acc + (e.selected ? e.price : 0);
  }, 0);
}
</script>
