<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M2.47 17.75V24h4.4v-5.98c0-0.580.23-1.140.65-1.55a2.2 2.2 0 0 1 1.56-0.64h4.51a7.96 7.96 0 0 0 5.61-2.32 7.91 7.91 0 0 0 2.33-5.59 7.91 7.91 0 0 0-2.33-5.6A7.96 7.96 0 0 0 13.59 0H2.47v7.81h4.4V4.13h6.42c1 0 1.950.39 2.66 1.10.70.7 1.1 1.65 1.1 2.65a3.74 3.74 0 0 1-1.1 2.65 3.77 3.77 0 0 1-2.66 1.1H8.63a6.16 6.16 0 0 0-4.35 1.8 6.13 6.13 0 0 0-1.8 4.34Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
