<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17 11V5c0-1.1-0.9-2-2-2H9c-1.1 0-2 0.9-2 2v2H5c-1.1 0-2 0.9-2 2v10c0 1.10.9 2 2 2h5c0.55 0 1-0.45 1-1v-3h2v3c0 0.550.45 1 1 1h5c1.1 0 2-0.9 2-2v-6c0-1.1-0.9-2-2-2h-2zM7 19H5v-2h2v2zm0-4H5v-2h2v2zm0-4H5V9h2v2zm4 4H9v-2h2v2zm0-4H9V9h2v2zm0-4H9V5h2v2zm4 8h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm4 12h-2v-2h2v2zm0-4h-2v-2h2v2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
