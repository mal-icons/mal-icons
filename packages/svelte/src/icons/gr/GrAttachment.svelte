<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M22,12 C22,12 19,15 13,21 C7,27 -2,18 4,12 C10,6 9,7 13,3 C17,-1 23,5 19,9 C15,13 12,16 10,18 C8,20 5,17 7,15 C9,13 16,6 16,6"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
