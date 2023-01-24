<template>
  <b-table :items="items" :fields="fields"/>
  <div class="d-flex">
    <b-pagination
        class="mr-2 align-self-center mb-0"
        v-model="context.currentPage"
        :total-rows="total"
        :per-page="context.perPage"
    ></b-pagination>
    <b-form-select class="mr-2 d-inline h-auto align-self-center" v-model="context.perPage" :options="[1, 2, 3, 4]" size="sm"></b-form-select>
    <input type="text" v-model="search">
  </div>
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
import { BFormSelect } from 'bootstrap-vue-next'
import {AxiosResponse} from "axios";

export type Context = {
  currentPage: number,
  perPage: number,
  sortBy: string,
  sortDesc: boolean
}

const props = defineProps({
  provider: {
    type: Function as PropType<(ctx: Context, search: string) => Promise<AxiosResponse<Array<any>>>>,
    required: true
  },
  fields: {
    type: Array as PropType<any[]>,
    required: true,
  }
})

const items = ref<any[]>([]);
const context = ref<Context>({} as Context);
const total = ref(0)
const search = ref("")

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
    perPage: 1,
    sortBy: "id, desc",
    sortDesc: true
  };
})

watch([context, search],
    ([newContext, newSearch]) => {
      console.log(JSON.stringify(newContext), JSON.stringify(newSearch))
      props.provider(newContext, search.value)
          .then(res => {
            total.value = Number(res.headers["x-total-count"]);
            items.value = res.data;
          })
    },
    {deep: true});

</script>