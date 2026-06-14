<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M1 12C1 5.93 5.93 1 12 1s11 4.93 11 11-4.92 11-11 11S1 18.08 1 12Zm11.58-4.75a0.830.83 0 1 0-1.65 0v5.5c0 0.30.160.570.420.72l3.5 2a0.830.83 0 0 0 0.82-1.43l-3.08-1.76Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
