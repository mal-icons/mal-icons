<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M5 11.5a0.50.5 0 0 1 0.5-0.5h9a0.50.5 0 0 1 0 1h-9a0.50.5 0 0 1-0.5-0.5m0-4a0.50.5 0 0 1 0.5-0.5h9a0.50.5 0 0 1 0 1h-9a0.50.5 0 0 1-0.5-0.5m0-4a0.50.5 0 0 1 0.5-0.5h9a0.50.5 0 0 1 0 1h-9a0.50.5 0 0 1-0.5-0.5m-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
