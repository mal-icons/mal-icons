<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M1.27 4.15a0.970.97 0 0 1 0.92-0.65h21.33a0.490.49 0 0 1 0.460.65l-1.25 3.56a0.970.97 0 0 1-0.920.65H0.49a0.490.49 0 0 1-0.46-0.65Zm4.86 6.07a0.970.97 0 0 1 0.92-0.65h8.34a0.490.49 0 0 1 0.460.65l-1.25 3.56a0.970.97 0 0 1-0.920.65H5.34a0.490.49 0 0 1-0.46-0.65Zm2.7 6.07a0.970.97 0 0 1 0.92-0.65h3.48a0.490.49 0 0 1 0.460.65l-1.25 3.56a0.970.97 0 0 1-0.920.65H8.04a0.490.49 0 0 1-0.46-0.65Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
