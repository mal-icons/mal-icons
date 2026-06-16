<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M7.82 16H15v-1c0-2.21 1.79-4 4-4h0.74l-1.9-8.44A2.01 2.01 0 0 0 15.89 1H12v2h3.89l1.4 6.25h-0.01A6.01 6.01 0 0 0 13.09 14H7.82a3 3 0 0 0-3.42-1.94c-1.180.23-2.13 1.2-2.35 2.38A3 3 0 0 0 5 18c1.3 0 2.4-0.84 2.82-2zM5 16c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1z"}],["path",{"d":"M19 12c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zm0 4c-0.55 0-1-0.45-1-1s0.45-1 1-1 1 0.45 1 1-0.45 1-1 1zm-8 4H7l6 3v-2h4l-6-3z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
