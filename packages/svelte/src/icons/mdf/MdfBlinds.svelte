<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 19V3H4v16H2v2h20v-2h-2zM16 9h2v2h-2V9zm-2 2H6V9h8v2zm4-4h-2V5h2v2zm-4-2v2H6V5h8zM6 19v-6h8v1.82A1.75 1.75 0 0 0 15 18a1.75 1.75 0 0 0 1-3.18V13h2v6H6z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
