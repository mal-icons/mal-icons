<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M14.56 24c-5.09 0-7.03-3.76-7.03-6.41V9.75H5.12V6.65c3.63-1.31 4.51-4.6 4.71-6.47C9.840.05 9.94 0 10 0h3.52v6.11h4.8v3.63h-4.82v7.47c0.02 10.38 2.37 2.21 2.37h0.09c0.63-0.02 1.49-0.2 1.94-0.42l1.16 3.43c-0.440.64-2.4 1.37-4.16 1.4h-0.18l0.010z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
