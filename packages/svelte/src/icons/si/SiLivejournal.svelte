<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18.09 14.7c-1.510.66-2.73 1.89-3.38 3.4l4.270.88-0.89-4.28h0zM2.48 8.32L0 5.85C1.13 3.24 3.22 1.14 5.82 0h0.01l2.47 2.46c1.37-0.59 2.88-0.92 4.46-0.92C18.97 1.54 24 6.57 24 12.77 24 18.97 18.97 24 12.76 24 6.55 24 1.52 18.98 1.52 12.77c0-1.590.36-3.080.95-4.45l9.14 9.11c1.13-2.61 3.22-4.71 5.82-5.85l-9.13-9.12h-0.01c-2.61 1.14-4.69 3.24-5.82 5.85l00z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
