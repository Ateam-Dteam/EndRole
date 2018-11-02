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
import FormPlace from '@/components/modules/FormPlace'
import FormScale from '@/components/modules/FormScale'
import FormOther from '@/components/modules/FormOther'
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
    FormEstimate,
    FormPlace,
    FormScale,
    FormOther
  }
}
</script>

<style scoped>

</style>
