<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6 3.5a0.50.5 0 0 1 0.50.5v8a0.50.5 0 0 1-1 0V4a0.50.5 0 0 1 0.5-0.5m4 0a0.50.5 0 0 1 0.50.5v8a0.50.5 0 0 1-1 0V4a0.50.5 0 0 1 0.5-0.5"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
