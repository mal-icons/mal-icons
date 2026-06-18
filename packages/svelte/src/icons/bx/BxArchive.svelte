<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m21.71 5.29-3-3A11 0 0 0 18 2H6a11 0 0 0-0.710.29L2.29 5.29A0.990.99 0 0 0 2 6V19c0 1.10.9 2 2 2h16c1.1 0 2-0.9 2-2V6a0.990.99 0 0 0-0.29-0.71zM6.41 4h11.17l11H5.42L6.41 4zM4 19V7h16L20 19H4z"}],["path",{"d":"M15 12H9v-2H7v4h10v-4h-2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
