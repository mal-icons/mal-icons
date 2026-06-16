<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18.83 7h-2.6L10.5 4 4 7.4V17c-1.1 0-2-0.9-2-2V7.17c0-0.530.32-1.090.8-1.34L10.5 2l7.54 3.83c0.430.230.730.70.79 1.17zM20 8H7c-1.1 0-2 0.9-2 2v9c0 1.10.9 2 2 2h13c1.1 0 2-0.9 2-2v-9c0-1.1-0.9-2-2-2zm0 3.67L13.5 15 7 11.67V10l6.5 3.33L20 10v1.67z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
