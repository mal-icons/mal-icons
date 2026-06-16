<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9.53 5.29 12 2.83l2.46 2.46a11 0 1 0 1.41-1.41L12.70.7a11 0 0 0-1.41 0L8.12 3.88a11 0 1 0 1.41 1.41z"}],["path",{"d":"M9.53 10.29 12 7.83l2.46 2.46a11 0 1 0 1.41-1.41L12.7 5.7a11 0 0 0-1.41 0L8.12 8.88a11 0 1 0 1.41 1.41zm4.94 3.42L12 16.17l-2.46-2.46a11 0 1 0-1.41 1.41l3.17 3.18c0.390.39 1.020.39 1.41 0l3.17-3.18a11 0 1 0-1.41-1.41z"}],["path",{"d":"M14.47 18.72 12 21.17l-2.46-2.46a11 0 1 0-1.41 1.41l3.17 3.18c0.390.39 1.020.39 1.41 0l3.17-3.17a11 0 1 0-1.41-1.41z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
