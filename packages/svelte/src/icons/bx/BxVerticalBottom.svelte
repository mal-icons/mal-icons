<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18 19h3v2h-3zM13 19h3v2h-3zM8 19h3v2H8zM3 19h3v2H3zM13 5h-2v8H8l4 4 4-4h-3V5z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
