<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M14.13 3h-11.27l-2.87 4.37v6.63h17v-6.57l-2.87-4.44zM3.41 4h10.18l1.94 3.01h-14.09l1.97-3.01zM1 13v-5h15v5h-15zM13.5 9c-0.83 0-1.5 0.67-1.5 1.5s0.67 1.5 1.5 1.5 1.5-0.67 1.5-1.5-0.67-1.5-1.5-1.5zM13.5 11c-0.28 0-0.5-0.22-0.5-0.5s0.23-0.5 0.5-0.5 0.5 0.23 0.5 0.5-0.22 0.5-0.5 0.5z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 17 17" {nodes} {...props} />
