<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"}],["path",{"d":"m10.97 4.97-0.020.02-3.47 4.43-2.09-2.09a0.750.75 0 0 0-1.06 1.06L6.97 11.03a0.750.75 0 0 0 1.08-0.02l3.99-4.99a0.750.75 0 0 0-1.07-1.05"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
