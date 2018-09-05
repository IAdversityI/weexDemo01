<template>
    <div>
        <text>专题页面</text>
    </div>
</template>
<script>
import util from "../util";
var navigator = weex.requireModule("navigator");
export default {
  methods: {
    // jumpWeb(_url) {
    //   const url = this.$getConfig().bundleUrl;
    //   navigator.push({
    //     url: util.setBundleUrl(url, "page/webview.js?weburl=" + _url),
    //     animated: "true"
    //   });
    // }
  }
};
</script>

