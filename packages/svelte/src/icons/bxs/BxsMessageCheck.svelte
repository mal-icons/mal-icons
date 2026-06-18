<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 2H4c-1.1 0-2 0.89-2 1.99v12.02C2 17.11 2.9 18 4 18h3v4l6.35-4H20c1.1 0 2-0.89 2-1.99V3.99A2 2 0 0 0 20 2zm-9 11.91-3.71-3.71 1.41-1.41L11 11.09l4.79-4.79 1.41 1.41L11 13.91z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
