<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M1,1 L19,1 L19,19 L1,19 L1,1 Z M5,19 L5,23 L23,23 L23,5.97 L19,5.97 M6,8 C6.55,8 7,7.55 7,7 C7,6.45 6.55,6 6,6 C5.45,6 5,6.45 5,7 C5,7.55 5.45,8 6,8 Z M2,18 L7,12 L10,15 L14,10 L19,16"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
