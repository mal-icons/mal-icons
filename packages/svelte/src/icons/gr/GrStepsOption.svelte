<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M24,9 L19,9 L19,14 L14,14 L14,19 L9,19 L9,24 M1,24 L1,17 C1,16.45 1.31,15.69 1.7,15.3 L15.3,1.7 C15.69,1.31 16.45,1 17,1 L24,1"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
