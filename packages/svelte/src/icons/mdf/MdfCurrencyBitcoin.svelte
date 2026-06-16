<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17.06 11.57c0.59-0.690.94-1.590.94-2.57 0-1.86-1.27-3.43-3-3.87V3h-2v2h-2V3H9v2H6v2h2v10H6v2h3v2h2v-2h2v2h2v-2c2.21 0 4-1.79 4-4 0-1.45-0.78-2.73-1.94-3.43zM10 7h4c1.1 0 2 0.9 2 2s-0.9 2-2 2h-4V7zm5 10h-5v-4h5c1.1 0 2 0.9 2 2s-0.9 2-2 2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
