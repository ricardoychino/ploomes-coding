<script setup lang="ts">
import { provide } from 'vue';
import SectionPloomes from './SectionPloomes.vue'
import type { IForm } from '../types/types.d.ts'

const props = defineProps<{ form: IForm | null }>()

const onSubmit = e => {

  // submeter
}

provide('columns', props.form.Columns)
</script>

<template>
  <div>
    <form v-if="form !== null" @submit.prevent="onSubmit">
      <h4>{{ form.Title }}</h4>
      <SectionPloomes v-for="sectionId of form.SectionIds" :sectionId="sectionId" :key="sectionId" />

      <button type="submit">Enviar</button>
    </form>
  </div>
</template>