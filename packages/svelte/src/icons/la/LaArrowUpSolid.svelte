<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M 16 4.09 L 15.28 4.78 L 6.78 13.28 L 8.22 14.72 L 15 7.94 L 15 28 L 17 28 L 17 7.94 L 23.78 14.72 L 25.22 13.28 L 16.72 4.78 Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 32 32" {nodes} {...props} />
