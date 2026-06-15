<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M1,23 L4,20 L1,23 Z M20,4 L23,1 L20,4 Z M9,11 L12,8 L9,11 Z M13,15 L16,12 L13,15 Z M10,5 L19,14 L20,13 C22,11 24.05,8 20,4 C15.95,0 13,2 11,4 L10,5 Z M4,11 L5,10 L14,19 L13,20 C11,22 8,24.09 4,20 C0,15.91 2,13 4,11 Z"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
