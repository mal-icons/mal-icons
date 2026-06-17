<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11 4v1.47a0.250.25 0 0 0 0.410.19l2.36-1.97a0.250.25 0 0 0 0-0.38l-2.36-1.97a0.250.25 0 0 0-0.410.19V3H5a5 5 0 0 0-4.48 7.220.50.5 0 0 0 0.9-0.45A4 4 0 0 1 5 4zm4.48 1.78a0.50.5 0 0 0-0.90.45A4 4 0 0 1 11 12H5v-1.47a0.250.25 0 0 0-0.41-0.19l-2.36 1.97a0.250.25 0 0 0 0 0.38l2.36 1.97a0.250.25 0 0 0 0.41-0.19V13h6a5 5 0 0 0 4.48-7.22Z"}],["path",{"d":"M9 5.5a0.50.5 0 0 0-0.85-0.35l-1.75 1.75a0.50.5 0 1 0 0.710.71L8 6.71V10.5a0.50.5 0 0 0 1 0z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
