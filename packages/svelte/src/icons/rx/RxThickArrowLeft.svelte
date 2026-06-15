<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M1 7.5C1 7.66 1.08 7.81 1.21 7.91L8.21 12.91C8.36 13.02 8.56 13.03 8.73 12.94C8.9 12.86 9 12.69 9 12.5L9 10L11.5 10C11.78 10 12 9.78 12 9.5L12 5.5C12 5.22 11.78 5 11.5 5L9 5L9 2.5C9 2.31 8.9 2.14 8.73 2.06C8.56 1.97 8.36 1.98 8.21 2.09L1.21 7.09C1.08 7.19 1 7.34 1 7.5ZM8 3.47L8 5.5C8 5.78 8.22 6 8.5 6L11 6L11 9L8.5 9C8.22 9 8 9.22 8 9.5L8 11.53L2.36 7.5L8 3.47Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 15 15" {nodes} {...props} />
