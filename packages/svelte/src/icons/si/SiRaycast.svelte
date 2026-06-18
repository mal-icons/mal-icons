<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6 15.49v2.5L0 11.99l1.26-1.25Zm2.5 2.5H6L12.01 24l1.25-1.25zm14.24-4.75L24 12 12 0 10.75 1.25 15.49 6h-2.86L9.32 2.69 8.07 3.94l2.06 2.06H8.69v9.31H18v-1.43l2.06 2.06 1.25-1.25-3.31-3.32V8.51ZM6.63 5.37 5.38 6.63l1.34 1.34 1.25-1.25Zm10.66 10.66-1.25 1.25 1.34 1.34 1.25-1.25zM3.94 8.06 2.69 9.31l3.31 3.31v-2.51zm9.94 9.94h-2.5l3.31 3.31 1.25-1.25z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
