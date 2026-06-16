<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21 4H3c-1.1 0-2 0.9-2 2v13c0 1.10.9 2 2 2h18c1.1 0 2-0.9 2-2V6c0-1.1-0.9-2-2-2zM7 12v2H5v-2h2zm-2-2V8h2v2H5zm6 2v2H9v-2h2zm-2-2V8h2v2H9zm7 6.5c0 0.28-0.220.5-0.50.5h-7c-0.28 0-0.5-0.22-0.5-0.5s0.22-0.50.5-0.5h7c0.28 0 0.50.220.50.5zM15 12v2h-2v-2h2zm-2-2V8h2v2h-2zm4 4v-2h2v2h-2zm2-4h-2V8h2v2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
