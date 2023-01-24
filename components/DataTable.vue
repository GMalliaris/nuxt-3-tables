<template>
  <b-table :items="provider" :fields="fields"
           :per-page="context.perPage"
           :current-page="context.currentPage"
           :sort-by="context.sortBy"
           :sort-desc="context.sortDesc"
           no-provider-paging
           no-provider-sorting
           no-provider-filtering />
  <b-pagination
      v-model="context.currentPage"
      :total-rows="100"
      :per-page="context.perPage"
      aria-controls="my-table"
  ></b-pagination>
</template>

<script lang="ts">
import {PropType} from "@vue/runtime-core";



export default defineNuxtComponent({
  name: "DataTable",
  props: {
    test: String
  }
})
</script>

<script lang="ts" setup>
import { BTable, BPagination } from "bootstrap-vue-next";
import {PropType, watch} from "@vue/runtime-core";

// function mock(...args: any[]) {
//   console.log("mock", args)
//   return [
//     { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
//     { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
//     { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
//     { age: 38, first_name: 'Jami', last_name: 'Carney' }
//   ];
// }

type Context = {
  currentPage: number,
  perPage: number,
  sortBy: string,
  sortDesc: boolean
}

const props = defineProps({
  provider: {
    type: Function,
    required: true
  },
  fields: {
    type: Array as PropType<any[]>,
    required: true,
  }
})

const items = ref<any[]>([]);
const context = ref<Context>({} as Context);

// function pageChange(e: any) {
//   console.log(e)
// }

// function fetchItems() {
//   console.log("fetching", context.value)
//   props.provider(context.value).then(res => items.value = res);
// }

onMounted(() => {
  context.value = {
    currentPage: 1,
    perPage: 20,
    sortBy: "id, desc",
    sortDesc: true
  };
})

// watch(() => context.value,
//     () => fetchItems(),
//     {deep: true});

</script>