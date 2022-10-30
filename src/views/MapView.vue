<template>
  <div>
    <h1>지도</h1>
    <div id="map" style="width:500px; height:500px;"></div>
  </div>
</template>

<script>
export default {
    methods:{
      // 지도 관련 카카오 API src import  -> 이게 핵심포인트
      initKakao(callback) {
        const script = document.createElement("script");
        script.onload = () => window.kakao.maps.load(callback);
        script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.VUE_APP_KAKAO_JAVASCRIPT_KEY}&autoload=false`;
        document.head.appendChild(script);
      },

      // map 객체를 생성합니다.
      initMap() {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(37.515, 126.983),
          level: 8,
        };
        new window.kakao.maps.Map(container, options);
      },

        
    },

    mounted() {
      if (typeof window.kakao?.maps === "undefined") {
        this.initKakao(this.initMap);
      } else {
        this.initMap();
      }
    },

}
</script>

<style>

</style>