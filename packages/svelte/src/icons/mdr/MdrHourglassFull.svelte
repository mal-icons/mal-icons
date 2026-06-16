<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6 4v3.17c0 0.530.21 1.040.59 1.42L10 12l-3.42 3.42c-0.370.38-0.580.89-0.58 1.42V20c0 1.10.9 2 2 2h8c1.1 0 2-0.9 2-2v-3.16c0-0.53-0.21-1.04-0.58-1.41L14 12l3.41-3.4c0.38-0.380.59-0.890.59-1.42V4c0-1.1-0.9-2-2-2H8c-1.1 0-2 0.9-2 2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
