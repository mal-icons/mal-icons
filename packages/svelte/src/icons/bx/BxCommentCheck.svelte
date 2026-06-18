<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m17.21 8.21-1.41-1.41L11 11.59 8.71 9.29l-1.41 1.41L11 14.41z"}],["path",{"d":"M20 2H4c-1.1 0-2 0.9-2 2v18l5.33-4H20c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2zm0 14H6.67L4 18V4h16v12z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
