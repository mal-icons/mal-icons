<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m4.43 12.82 13 9A1 1 0 0 0 19 21V3a1 1 0 0 0-1.57-0.82l-13 9a1 1 0 0 0 0 1.65z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
