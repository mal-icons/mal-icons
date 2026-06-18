<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21 10H7V7c0-1.10.9-2 2-2s2 0.9 2 2h2c0-2.21-1.79-4-4-4S5 4.79 5 7v3H3a1 1 0 0 0-1 1v2c0 2.61 1.67 4.82 4 5.65V22h2v-3h8v3h2v-3.35c2.33-0.83 4-3.04 4-5.65v-2a1 1 0 0 0-1-1zm-1 3c0 2.21-1.79 4-4 4H8c-2.21 0-4-1.79-4-4v-1h16v1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
