<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 1H8v17.99h12V1zm-6 2c1.1 0 2 0.89 2 2s-0.9 2-2 2-2-0.89-2-2 0.9-2 2-2zm0 13.5c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"}],["circle",{"cx":"14","cy":"12.5","r":"2.5"}],["path",{"d":"M6 5H4v18h12v-2H6z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
