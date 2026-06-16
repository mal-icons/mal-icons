<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m10 7.5 7.5 7.5-1.41 1.41L15 15.33V20h-4v-5H9v5H5v-4.67l-1.09 1.09L2.5 15 10 7.5zm12-1h-1.19l0.75-0.75-0.71-0.71-1.46 1.46h-0.89v-0.89l1.45-1.45-0.71-0.71-0.740.74V3h-1v1.19l-0.75-0.75-0.710.71 1.45 1.45v0.9h-0.89l-1.45-1.45-0.710.710.750.75H14v1h1.19l-0.750.750.710.71 1.45-1.45h0.89v0.89l-1.45 1.450.710.710.75-0.75V11h1V9.81l0.750.750.71-0.71-1.46-1.46V7.5h0.89l1.45 1.450.71-0.71-0.74-0.74H22v-1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
