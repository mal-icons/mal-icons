<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.91-3c-0.49 0-0.90.36-0.980.85C16.52 14.2 14.47 16 12 16s-4.52-1.8-4.93-4.15a11 0 0 0-0.98-0.85c-0.61 0-1.090.54-1 1.140.49 3 2.89 5.35 5.91 5.78V20c0 0.550.45 1 1 1s1-0.45 1-1v-2.08a6.99 6.99 0 0 0 5.91-5.78c0.1-0.6-0.39-1.14-1-1.14z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
