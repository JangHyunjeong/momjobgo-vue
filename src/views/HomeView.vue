<template>
  <div class="home">
    {{ wrapData }}
    <hr />
    {{ message }}
  </div>
</template>

<script>
// @ is an alias to /src
import mixin from '@/mixin';

export default {
  mixins : [mixin],
  components: {
  },
  data(){
    return {
      now: new Date(),
    }
  },

  computed: {
    wrapData() {
      return this.toTmdHms(this.now);
    }
  }
}
</script>
