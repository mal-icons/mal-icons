<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"stroke":"currentColor","stroke-width":"2","d":"M15 6V1m-3 23v-9M9 6V1M6 6h12v7a2 2 0 1-2 2H8a2 2 0 1-2-2V6z"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
