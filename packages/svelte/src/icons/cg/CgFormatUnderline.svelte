<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6 10V4H8V10C8 12.21 9.79 14 12 14C14.21 14 16 12.21 16 10V4H18V10C18 13.31 15.31 16 12 16C8.69 16 6 13.31 6 10Z","fill":"currentColor"}],["path",{"d":"M7 18C6.45 18 6 18.45 6 19C6 19.55 6.45 20 7 20H17C17.55 20 18 19.55 18 19C18 18.45 17.55 18 17 18H7Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
