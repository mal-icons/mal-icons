<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6.78 1.97a0.750.75 0 0 1 0 1.06L3.81 6h6.44A4.75 4.75 0 0 1 15 10.75v2.5a0.750.75 0 0 1-1.5 0v-2.5a3.25 3.25 0 0 0-3.25-3.25H3.81l2.97 2.97a0.750.75 0 0 1-0.33 1.270.750.75 0 0 1-0.73-0.21L1.47 7.28a0.750.75 0 0 1 0-1.06l4.25-4.25a0.750.75 0 0 1 1.06 0Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
