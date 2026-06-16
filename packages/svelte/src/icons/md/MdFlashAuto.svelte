<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 2v12h3v9l7-12H9l4-9H3zm16 0h-2l-3.2 9h1.9l0.7-2h3.2l0.7 2h1.9L19 2zm-2.15 5.65L18 4l1.15 3.65h-2.3z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
