<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M23 11.01 18 11c-0.55 0-1 0.45-1 1v9c0 0.550.45 1 1 1h5c0.55 0 1-0.45 1-1v-9c0-0.55-0.45-0.99-1-0.99zM23 20h-5v-7h5v7zM20 2H2C0.9 2 0 2.9 0 4v12c0 1.10.9 2 2 2h7v2H8c-0.55 0-1 0.45-1 1s0.45 1 1 1h6c0.55 0 1-0.45 1-1s-0.45-1-1-1h-1v-2h1c0.55 0 1-0.45 1-1s-0.45-1-1-1H3c-0.55 0-1-0.45-1-1V5c0-0.550.45-1 1-1h16c0.55 0 1 0.45 1 1v3c0 0.550.45 1 1 1s1-0.45 1-1V4c0-1.1-0.9-2-2-2zm-8.03 7L11 6l-0.97 3H7l2.47 1.76-0.94 2.91 2.47-1.8 2.47 1.8-0.94-2.91L15 9h-3.03z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
