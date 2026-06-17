<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5.93 1.76a0.50.5 0 1 0-0.86-0.51L2.22 6H0.5a0.50.5 0 0 0-0.50.5v1a0.50.5 0 0 0 0.50.5h0.62l1.84 6.46A0.750.75 0 0 0 3.69 15h8.62a0.750.75 0 0 0 0.72-0.54L14.88 8h0.62a0.50.5 0 0 0 0.5-0.5v-1a0.50.5 0 0 0-0.5-0.5h-1.72L10.93 1.24a0.50.5 0 1 0-0.860.51L12.62 6H3.38zM4 10a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm3 0a1 1 0 0 1 2 0v2a1 1 0 1 1-2 0zm4-1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
