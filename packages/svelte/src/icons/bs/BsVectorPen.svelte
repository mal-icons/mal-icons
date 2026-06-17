<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M10.650.65a0.50.5 0 0 1 0.71 0l4 4a0.50.5 0 0 1 0 0.71l-1.9 1.9-0.83 3.31a1.5 1.5 0 0 1-1.02 1.07L1.25 14.75 4.36 4.4A1.5 1.5 0 0 1 5.43 3.38l3.31-0.83zm-1.8 2.91-3.170.79a0.50.5 0 0 0-0.360.34l-2.57 8.57 8.57-2.57a0.50.5 0 0 0 0.34-0.36l0.79-3.17-3.6-3.6z"}],["path",{"fill-rule":"evenodd","d":"M2.83 13.23 8 9a1 1 0 1 0-1-1l-4.23 5.17-0.030.09z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
