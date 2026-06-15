<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M4.85 2.15C5.05 2.34 5.05 2.66 4.85 2.85L3.71 4H9C11.49 4 13.5 6.01 13.5 8.5C13.5 10.99 11.49 13 9 13H5C4.72 13 4.5 12.78 4.5 12.5C4.5 12.22 4.72 12 5 12H9C10.93 12 12.5 10.43 12.5 8.5C12.5 6.57 10.93 5 9 5H3.71L4.85 6.15C5.05 6.34 5.05 6.66 4.85 6.85C4.66 7.05 4.34 7.05 4.15 6.85L2.15 4.85C1.95 4.66 1.95 4.34 2.15 4.15L4.15 2.15C4.34 1.95 4.66 1.95 4.85 2.15Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 15 15" {nodes} {...props} />
