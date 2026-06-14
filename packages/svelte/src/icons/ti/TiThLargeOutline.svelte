<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9 2h-5c-1.1 0-2 0.9-2 2v5c0 1.10.9 2 2 2h5c1.1 0 2-0.9 2-2v-5c0-1.1-0.9-2-2-2zm0 7h-5v-5h5v5zM20 2h-5c-1.1 0-2 0.9-2 2v5c0 1.10.9 2 2 2h5c1.1 0 2-0.9 2-2v-5c0-1.1-0.9-2-2-2zm0 7h-5v-5h5v5zM9 13h-5c-1.1 0-2 0.9-2 2v5c0 1.10.9 2 2 2h5c1.1 0 2-0.9 2-2v-5c0-1.1-0.9-2-2-2zm0 7h-5v-5h5v5zM20 13h-5c-1.1 0-2 0.9-2 2v5c0 1.10.9 2 2 2h5c1.1 0 2-0.9 2-2v-5c0-1.1-0.9-2-2-2zm0 7h-5v-5h5v5z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
