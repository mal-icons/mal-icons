<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m15.5 4-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.10.9 2 2 2h8c1.1 0 2-0.9 2-2V7H6v12zm2-5V9h8v10H8v-5zm2 4h4v-4h2l-4-4-4 4h2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
