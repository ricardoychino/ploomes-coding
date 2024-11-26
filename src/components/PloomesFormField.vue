<script setup lang="ts">
import { computed } from 'vue'
import { fields } from '../assets/livecode_form.ts'
import { IField } from '../types/types.d.ts'

const props = defineProps<{ fieldId: number }>()

const fieldData = computed<IField>(() => fields.find(el => el.Id === props.fieldId));
</script>

<template>
  <div>
    <label>{{ fieldData.Title }}</label>
    {{ fieldData }}
  </div>
</template>