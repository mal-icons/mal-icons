<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 0H4a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h16A4 4 0 0 0 24 20V4a4 4 0 0 0-4-4ZM5.4 19.58l-1.83-1.67a0.320.32 0 0 1-0.02-0.44l4-4.38a0.310.31 0 0 0 0.01-0.41L3.82 8.22a0.320.32 0 0 1 0.04-0.44l1.89-1.59a0.320.32 0 0 1 0.440.04l5.5 6.54a0.320.32 0 0 1-0.010.42L5.84 19.56a0.320.32 0 0 1-0.440.02zm15.15-0.1c0 0.17-0.140.32-0.310.32H11.74a0.320.32 0 0 1-0.31-0.31v-2.33c0-0.170.14-0.310.31-0.31h8.49c0.17 0 0.320.140.320.32z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
