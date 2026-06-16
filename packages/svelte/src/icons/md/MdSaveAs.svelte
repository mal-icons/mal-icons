<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21 12.4V7l-4-4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.4l2-2H5V5h11.17L19 7.83v6.57l2-2zM15 15c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zM6 6h9v4H6V6zm13.99 10.25 1.77 1.77L16.77 23H15v-1.77l4.99-4.98zm3.260.26-0.850.85-1.77-1.770.85-0.85c0.2-0.20.51-0.20.71 0l1.06 1.06c0.20.20.20.52 0 0.71z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
