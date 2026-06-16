<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6 20c1.1 0 2-0.9 2-2v-7c0-1.1-0.9-2-2-2s-2 0.9-2 2v7c0 1.10.9 2 2 2zm10-5v3c0 1.10.9 2 2 2s2-0.9 2-2v-3c0-1.1-0.9-2-2-2s-2 0.9-2 2zm-4 5c1.1 0 2-0.9 2-2V6c0-1.1-0.9-2-2-2s-2 0.9-2 2v12c0 1.10.9 2 2 2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
