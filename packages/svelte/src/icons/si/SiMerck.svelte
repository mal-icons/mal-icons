<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6 6a6 6 0 112 0zm0 12a6 6 0 16-6 6 6 0 1-6-6 6 6 0 0 12 a6 6 0 1012 0zm6-6a6 6 0 16 6 6 6 0 100-12c0 3.31-2.69 6-6 6"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
