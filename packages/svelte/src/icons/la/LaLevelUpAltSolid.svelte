<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M 17 4 L 16.28 4.69 L 7.78 13.19 L 9.22 14.63 L 16 7.84 L 16 26 L 6 26 L 6 28 L 16 28 L 18 28 L 18 7.84 L 24.78 14.63 L 26.22 13.19 L 17.72 4.69 L 17 4 z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 32 32" {nodes} {...props} />
