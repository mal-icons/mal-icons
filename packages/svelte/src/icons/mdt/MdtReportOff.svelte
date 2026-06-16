<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19 9.1 14.9 5H9.1l-0.220.22L11 7.33V7h2v2.33l5.78 5.790.22-0.22zM6.05 8.04 5 9.1v5.8L9.1 19h5.8l1.05-1.05-9.9-9.91zM13 16c0 0.55-0.45 1-1 1s-1-0.45-1-1 0.45-1 1-1 1 0.45 1 1z","opacity":".3"}],["path",{"d":"M9.1 5h5.8L19 9.1v5.8l-0.220.22 1.42 1.410.8-0.8V8.27L15.73 3H8.27l-0.80.8 1.41 1.42z"}],["circle",{"cx":"12","cy":"16","r":"1"}],["path",{"d":"M13 7h-2v0.33l2 2zM2.41 1.58 1 2.99l3.64 3.64L3 8.27v7.46L8.27 21h7.46l1.64-1.64L21.01 23l1.41-1.41L2.41 1.58zM14.9 19H9.1L5 14.9V9.1l1.05-1.05 9.9 9.9L14.9 19z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
