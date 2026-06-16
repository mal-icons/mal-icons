<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19.04 3h-14c-1.1 0-2 0.9-2 2v14c0 1.10.9 2 2 2h14c1.1 0 2-0.9 2-2V5c0-1.1-0.9-2-2-2zm-5 14c-0.55 0-1-0.45-1-1v-3h-3c-0.55 0-1-0.45-1-1V8c0-0.550.45-1 1-1s1 0.45 1 1v3h2V8c0-0.550.45-1 1-1s1 0.45 1 1v8c0 0.55-0.45 1-1 1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
