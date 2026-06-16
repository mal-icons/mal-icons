<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17 14h-6.7l-7.45-2.230.31-0.62 8.440.85 3.93-2.94s3.77 3.44 4.27 4.14c0 0-1.10.8-2.80.8z","opacity":".3"}],["path",{"d":"M22 17c0 0.55-0.45 1-1 1h-0.17l-2.2-2.2C20.58 15.37 22 14.4 22 13c0-1-8-8-8-8h-3v2h2.25l0.80.72L11 10 2 9l-2 4 4.54 1.36-3.49 1.88C-0.77 17.22-0.07 20 2 20h6c2.21 0 4-1.79 4-4h4l2 2h-3v2h6c1.66 0 3-1.34 3-3h-2zM8 18H2l5.25-2.83L10 16a2 2 0 0 1-2 2zm9-4h-6.7l-7.45-2.230.31-0.62 8.440.85 3.93-2.94s3.77 3.44 4.27 4.14c0 0-1.10.8-2.80.8z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
