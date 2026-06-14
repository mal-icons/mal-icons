<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["circle",{"cx":"12","cy":"17","r":"1.3"}],["path",{"d":"M17 10h-1v-2c0-2.21-1.79-4-4-4s-4 1.79-4 4v2h-1c-1.1 0-2 0.9-2 2v7c0 1.10.9 2 2 2h10c1.1 0 2-0.9 2-2v-7c0-1.1-0.9-2-2-2zm-7-2c0-1.10.9-2 2-2s2 0.9 2 2v3h-4v-3zm7 11h-10v-7h10l0 7z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
