<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M7 3c-0.55 0-1 0.45-1 1v5c0 2.97 2.16 5.43 5 5.91V19H9c-0.55 0-1 0.45-1 1s0.45 1 1 1h6c0.55 0 1-0.45 1-1s-0.45-1-1-1h-2v-4.09c2.84-0.48 5-2.94 5-5.91V4c0-0.55-0.45-1-1-1H7zm9 5H8V5h8v3z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
