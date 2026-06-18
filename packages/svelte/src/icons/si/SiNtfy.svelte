<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12.6 13.69v2.16h6.21v-2.16ZM5.18 6.55v2.36l3.59 1.90.020.01-0.020.01-3.59 1.9v2.35l0.39-0.21 5.46-2.97V9.73ZM3.66 2.04C1.92 2.040.42 3.410.42 5.15v0L0.44 18.73 0 21.96l5.96-1.58h14.81c1.74 0 3.24-1.37 3.24-3.12V5.15c0-1.74-1.49-3.12-3.24-3.12h0zm0 2.2h17.1c0.610 1.040.45 1.040.92v12.11c0 0.47-0.420.92-1.040.92H5.63l-3.030.920.03-0.18-0.02-13.76c0-0.470.42-0.92 1.04-0.92z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
