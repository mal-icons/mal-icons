<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 0L1.61 6v12L12 24l10.4-6V6L12 0zm6 16.59c0 0.71-0.65 1.29-1.53 1.29-0.63 0-1.35-0.25-1.8-0.81l-6-7.14v6.66c0 0.72-0.57 1.29-1.27 1.29H7.32c-0.72 0-1.29-0.6-1.29-1.29V7.41c0-0.70.63-1.29 1.5-1.290.65 0 1.380.26 1.830.81l5.97 7.14V7.41c0-0.720.6-1.29 1.29-1.29h0.08c0.72 0 1.290.6 1.29 1.29v9.18H18z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
