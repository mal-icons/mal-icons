<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21 19v-9c0-1.1-0.9-2-2-2h-3V5c0-1.1-0.9-2-2-2H5c-1.1 0-2 0.9-2 2v9c0 1.10.9 2 2 2h3v3c0 1.10.9 2 2 2h9c1.1 0 2-0.9 2-2zM5 14V5h9v3h-4c-1.1 0-2 0.9-2 2v4H5zm9 0H10v-4h4v4zM10 16h4c1.1 0 2-0.9 2-2v-4h3l0 9H10v-3z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
