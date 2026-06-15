<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M1,3 L23,3 L23,21 L1,21 L1,3 Z M6,9 C6.55,9 7,8.55 7,8 C7,7.45 6.55,7 6,7 C5.45,7 5,7.45 5,8 C5,8.55 5.45,9 6,9 Z M23,15 L18,9 L12,16 L9,13 L1,21"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
