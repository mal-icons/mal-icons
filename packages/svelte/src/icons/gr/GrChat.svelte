<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M5,1 L19,1 L19,1 C21.21,1 23,2.79 23,5 L23,13 L23,13 C23,15.21 21.21,17 19,17 L7,17 L1,22 L1,5 L1,5 C1,2.79 2.79,1 5,1 Z M5,7 L18,7 M5,11 L14,11","transform":"matrix(-1 0 0 1 24 0)"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
