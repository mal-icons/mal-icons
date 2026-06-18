<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m21.71 5.29-3-3A11 0 0 0 18 2H6a11 0 0 0-0.710.29L2.29 5.29A0.990.99 0 0 0 2 6v13c0 1.10.9 2 2 2h16c1.1 0 2-0.9 2-2V6a0.990.99 0 0 0-0.29-0.71zM6.41 4h11.17l1 1H5.41l1-1zM4 19V7h16l0 12H4z"}],["path",{"d":"M14 9h-4v3H7l5 5 5-5h-3z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
