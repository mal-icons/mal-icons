<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m12 18 4-5h-3V2h-2v11H8z"}],["path",{"d":"M19 9h-4v2h4v9H5v-9h4V9H5c-1.1 0-2 0.9-2 2v9c0 1.10.9 2 2 2h14c1.1 0 2-0.9 2-2v-9c0-1.1-0.9-2-2-2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
