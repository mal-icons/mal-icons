<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 2H8c-1.1 0-2 0.9-2 2v12c0 1.10.9 2 2 2h12c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2zm-2 5h-3v5.5a2.5 2.5 0 0 1-5 0 2.5 2.5 0 0 1 2.5-2.5c0.57 0 1.080.19 1.50.51V5h4v2zM4 6H2v14c0 1.10.9 2 2 2h14v-2H4V6z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
