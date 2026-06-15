<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"stroke-linecap":"round","stroke-linejoin":"round","d":"M16.02 9.35h4.99v0M2.99 19.64v-4.99m0 0h4.99m-4.99 0 3.18 3.18a8.25 8.25 0 0 0 13.8-3.7M4.03 9.87a8.25 8.25 0 0 1 13.8-3.7l3.18 3.18m0-4.99v4.99"}]];
  const defaultAttr = {"fill":"none","stroke-width":1.5};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
