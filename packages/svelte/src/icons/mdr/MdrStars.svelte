<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm3.23 15.39L12 15.45l-3.22 1.94a0.50.5 0 0 1-0.75-0.54l0.85-3.66-2.83-2.45a0.510.51 0 0 1 0.29-0.88l3.74-0.32 1.46-3.45c0.17-0.410.75-0.410.92 0l1.46 3.44 3.740.32a0.50.5 0 0 1 0.280.88l-2.83 2.450.85 3.67c0.10.43-0.360.77-0.740.54z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
