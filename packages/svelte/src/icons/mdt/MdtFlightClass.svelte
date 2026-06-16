<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M14 6h2v5h-2z","opacity":".3"}],["path",{"d":"M16 4h-2c-1.1 0-2 0.9-2 2v5c0 1.10.9 2 2 2h2c1.1 0 2-0.9 2-2V6c0-1.1-0.9-2-2-2zm0 7h-2V6h2v5zm-6.5 5H18v2H9.49c-0.88 0-1.66-0.58-1.92-1.43L5 8V4h2v4l2.5 8zM8 19h10v2H8v-2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
