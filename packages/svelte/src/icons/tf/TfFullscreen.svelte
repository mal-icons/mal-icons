<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16 11.35l0 4.65-4.650 0-1 2.94 0-5.79-5.79-5.79 5.79 2.940 0 1-4.65 0 0-4.65 1 00 2.94 5.79-5.79-5.79-5.79 0 2.94-1 00-4.65 4.65 00 1-2.940 5.79 5.79 5.79-5.79-2.94 00-1 4.6500 4.65-10 0-2.94-5.79 5.79 5.79 5.790-2.94 10z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 17 17" {nodes} {...props} />
