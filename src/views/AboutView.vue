<template>
  <div class="about">
    {{ wrapData }}
  </div>
</template>

<script>
  import mixin from '@/mixin';

  export default{
    mixins : [mixin],
    data() {
      return {
        // 1000 : 1초
        // * 60 : 1분
        // * 60 : 1시간
        // * 24 : 하루
        yesterDay: new Date(new Date().getTime() - 1000 * 60 * 60 * 24),
      }
    },
    computed: {
      wrapData() {
        return this.toTmdHms(this.yesterDay);
      }
    }
  }
</script>
