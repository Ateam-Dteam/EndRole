<template>
  <div>
    <component :is="isComponent"> </component>
  </div>
</template>

<script>
import FormReligion from '@/components/modules/FormReligion'
import FormAttendant from '@/components/modules/FormAttendant'
import FormOption from '@/components/modules/FromOption'
import FormEstimate from '@/components/modules/FormEstimate'
import { mapGetters } from 'vuex'

export default {
  name: 'Form',
  computed: {
    ...mapGetters('Form', {
      'isComponent': 'getComponent'
    })
  },
  components: {
    FormReligion,
    FormAttendant,
    FormOption,
    FormEstimate
  }
}
</script>

<style scoped>

</style>
