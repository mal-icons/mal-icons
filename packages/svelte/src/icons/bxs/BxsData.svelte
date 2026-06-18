<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 6c0-2.17-3.66-4-8-4S4 3.83 4 6v2c0 2.17 3.66 4 8 4s8-1.83 8-4V6zm-8 13c-4.34 0-8-1.83-8-4v3c0 2.17 3.66 4 8 4s8-1.83 8-4v-3c0 2.17-3.66 4-8 4z"}],["path",{"d":"M20 10c0 2.17-3.66 4-8 4s-8-1.83-8-4v3c0 2.17 3.66 4 8 4s8-1.83 8-4v-3z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
