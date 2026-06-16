<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 18h16V6H4v12zM16 8l2 2h-4l2-2zm2 6.25-2 2-2-2h4zM6 14h4v-1H7c-0.55 0-1-0.45-1-1V9c0-0.550.45-1 1-1h1V7h2v1h2v2H8v1h3c0.55 0 1 0.45 1 1v3c0 0.55-0.45 1-1 1h-1v1H8v-1H6v-2z","opacity":".3"}],["path",{"d":"M20 4H4c-1.11 0-1.990.89-1.99 2L2 18c0 1.110.89 2 2 2h16c1.11 0 2-0.89 2-2V6c0-1.11-0.89-2-2-2zm0 14H4V6h16v12z"}],["path",{"d":"M8 17h2v-1h1c0.55 0 1-0.45 1-1v-3c0-0.55-0.45-1-1-1H8v-1h4V8h-2V7H8v1H7c-0.55 0-1 0.45-1 1v3c0 0.550.45 1 1 1h3v1H6v2h2v1zm8-9-2 2h4zm2 6.25h-4l2 2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
