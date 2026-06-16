<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m4 18 2-2h14V4H4z","opacity":".3"}],["path",{"d":"M20 2H4c-1.1 0-2 0.9-2 2v18l4-4h14c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2zm0 14H6l-2 2V4h16v12z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
