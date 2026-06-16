<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21 9V7c0-1.65-1.35-3-3-3H6C4.35 4 3 5.35 3 7v2c-1.65 0-3 1.35-3 3v5c0 1.65 1.35 3 3 3h18c1.65 0 3-1.35 3-3v-5c0-1.65-1.35-3-3-3zM5 7c0-0.550.45-1 1-1h12c0.55 0 1 0.45 1 1v2.78c-0.610.55-1 1.34-1 2.22v2H6v-2c0-0.88-0.39-1.67-1-2.22V7zm17 10c0 0.55-0.45 1-1 1H3c-0.55 0-1-0.45-1-1v-5c0-0.550.45-1 1-1s1 0.45 1 1v4h16v-4c0-0.550.45-1 1-1s1 0.45 1 1v5z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
