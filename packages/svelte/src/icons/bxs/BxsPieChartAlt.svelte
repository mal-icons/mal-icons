<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19.07 4.93A9.97 9.97 0 0 0 12 2a9.94 9.94 0 0 0-7.07 2.93C3.04 6.82 2 9.33 2 12s1.04 5.18 2.93 7.07C6.82 20.96 9.33 22 12 22s5.18-1.04 7.07-2.93A9.94 9.94 0 0 0 22 12a9.97 9.97 0 0 0-2.93-7.07zm-1.41 12.73C16.15 19.17 14.14 20 12 20s-4.15-0.83-5.66-2.34C4.83 16.15 4 14.14 4 12s0.83-4.15 2.34-5.66A7.95 7.95 0 0 1 12 4v8h8a7.95 7.95 0 0 1-2.34 5.66z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
