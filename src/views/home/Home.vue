<template>
  <div class="home">
    <same-header />
    home
    <same-footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import SameHeader from '@/components/same/Header.vue';
import SameFooter from '@/components/same/Footer.vue';

export default Vue.extend({
  name: 'SpHome',
  components: {
    SameHeader,
    SameFooter
  },
});
</script>
