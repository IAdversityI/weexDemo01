<template>
    <div>
        <text>首页</text>
    </div>
</template>
<script>
var modal = weex.requireModule("modal");
var navigator = weex.requireModule("navigator");
import util from "../util";
export default {
  methods: {
    jumpWeb(_url) {
      const url = this.$getConfig().bundleUrl;
      navigator.push({
        url: util.setBundleUrl(url, "page/webview.js?weburl=" + _url),
        animated: "true"
      });
    }
  }
};
</script>
