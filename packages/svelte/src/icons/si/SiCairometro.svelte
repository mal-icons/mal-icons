<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12.4 4.14h0.88v0.88h-0.88zm-1.63 0h0.88v0.88h-0.88zm4.92 1.06v3.4h-1.39V5.2h-0.84v1.76h-2.98V5.2h-0.84v3.4H8.54v0.84h1.91V7.82h2.98v1.62h5.44V5.2zm2.35 3.4h-1.51V6.03h1.51zM5.17 5.2v2.6h2.35v0.81H5.17v0.83h3.19V5.2zm2.34 1.76H6v-0.92h1.51zm-2.64 12.18V9.73h4.18L12 12.68l2.95-2.95h4.18v9.4h-4.18v-3.44L12 18.75l-2.95-3.05v3.42zM12 0L8.49 3.52h-4.97v4.97L0 12l3.52 3.52v4.97h4.97L12 24l3.52-3.51h4.97v-4.97L24 12l-3.51-3.51v-4.97h-4.97zm0 1.71l3.01 3.02h4.26v4.26L22.29 12l-3.01 3.01v4.26h-4.26L12 22.29l-3.01-3.01H4.72v-4.26L1.71 12l3.02-3.01V4.72h4.26Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
