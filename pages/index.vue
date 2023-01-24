<template>
  <div>
    <h1>Landing Page</h1>
    <DataTable test="gmalliaris" :provider="providerFn" :fields="fields"/>
    <Blah test="gmalliaris" />
  </div>
</template>

<script lang="ts">
export default defineNuxtComponent({
  name: "Blah"
})
</script>

<script lang="ts" setup>
import DataTable from "~/components/DataTable.vue";
import Blah from "~/components/Blah.vue"


const fields = [
  // {key: 'first_name', sortable: true},
  // {key: 'last_name', sortable: false},
  // {key: 'age', sortable: true},
  {key: 'first_name', sortable: true},
  {key: 'last_name', label: "Label 2"},
  {key: 'age', label: "Label 3"},
]
const items = [
  { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
  { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
  { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
  { age: 38, first_name: 'Jami', last_name: 'Carney' }
]

type User = { id: string, age: number, first_name: string, last_name: string }

function providerFn(ctx?: any): Promise<User[]> {
  console.log(ctx)
  return useNuxtApp().$axios.get("/users")
      .then(res => {
        return res.data
      });
}

onMounted(() => {
  providerFn().then(res => (console.log(res)));
})
</script>