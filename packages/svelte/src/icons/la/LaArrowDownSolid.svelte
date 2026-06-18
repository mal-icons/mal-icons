<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M 15 4 L 15 24.06 L 8.22 17.28 L 6.78 18.72 L 15.28 27.22 L 16 27.91 L 16.72 27.22 L 25.22 18.72 L 23.78 17.28 L 17 24.06 L 17 4 Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 32 32" {nodes} {...props} />
