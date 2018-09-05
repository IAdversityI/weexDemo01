<template>
    <div>
        <text>我的</text>
    </div>
</template>
<script>
import util from "../util";
const navigator = weex.requireModule("navigator");
const binding = weex.requireModule("bindingx");
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

