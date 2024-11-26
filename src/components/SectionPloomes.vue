<script setup lang="ts">
import { computed } from 'vue'
import PloomesFormField from './PloomesFormField.vue'

import { sections } from '../assets/livecode_form.ts'
import { ISection } from '../types/types.d.ts'

const sectionsMap = new Map<number, ISection>();

sections.forEach(form => {
  sectionsMap.set(form.Id, form);
});


const props = defineProps<{ sectionId: number }>();

const sectionData = computed(() => sectionsMap.get(props.sectionId));
</script>

<template>
  <fieldset>
    <legend>{{ sectionData.Title }}</legend>

    <PloomesFormField v-for="fieldId of sectionData.FieldIds" :fieldId="fieldId" :key="fieldId" />


  </fieldset>
</template>