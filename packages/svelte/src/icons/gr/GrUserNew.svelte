<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M18,24 L18,12 M23,22 L13,15 M23,15 L13,22 M8,11 C10.76,11 13,8.76 13,6 C13,3.24 10.76,1 8,1 C5.24,1 3,3.24 3,6 C3,8.76 5.24,11 8,11 Z M13.02,13.02 C11.77,11.76 10.01,11 8,11 C4,11 1,14 1,18 L1,23 L11,23"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
