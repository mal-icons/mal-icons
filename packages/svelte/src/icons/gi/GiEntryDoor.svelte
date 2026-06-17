<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M217 28.1v455.8l142-42.6V70.7zM119 55v160h18V73h62V55zm257.980.03l0.02 2.28V87h16V55zM377 105v16h16v-16zm0 34v236h16V139zm-276.56 58.73L42.16 256l58.27 58.27V279h96v-46h-96zM244 232c6.63 0 12 10.75 12 24s-5.37 24-12 24-12-10.74-12-24 5.37-24 12-24zm-125 65v151h18V297zm258 96v14h16v-14zm0 32v23h16v-23zM32 471v18h167v-18zm290.65 0l-60 18H480v-18z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 512 512" {nodes} {...props} />
