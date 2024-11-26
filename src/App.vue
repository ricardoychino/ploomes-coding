<script setup lang="ts">
import { ref, onMounted } from 'vue';
import FormPloomes from './components/FormPloomes.vue'
import {forms} from './assets/livecode_form.ts'

const formsRef = new Map();
const selectedForm = ref<IForm | null>(null);


forms.forEach(form => {
  formsRef.set(form.Id, form);
});

const setSelectedForm = (formId) => {
  selectedForm.value = formsRef.get(formId);
}

setSelectedForm(1);
</script>

<template>
  <div>
    <FormPloomes :form="selectedForm" />
  </div>
</template>

<style scoped>
</style>
