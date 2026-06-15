<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M7.95 0.16C7.67 0.02 7.33 0.02 7.05 0.16L0.55 3.41C0.21 3.58 0 3.93 0 4.31V12C0 12.55 0.45 13 1 13H14C14.55 13 15 12.55 15 12V4.31C15 3.93 14.79 3.58 14.45 3.41L7.95 0.16ZM13.57 4.09L7.5 1.06L1.43 4.09L7.5 7.29L13.57 4.09ZM1 4.88V12H14V4.88L7.71 8.2C7.58 8.27 7.42 8.27 7.29 8.2L1 4.88Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 15 15" {nodes} {...props} />
