<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M 12.78 5.28 L 4.78 13.28 L 4.09 14 L 4.78 14.72 L 12.78 22.72 L 14.22 21.28 L 7.94 15 L 21 15 C 23.75 15 26 17.25 26 20 L 26 27 L 28 27 L 28 20 C 28 16.16 24.84 13 21 13 L 7.94 13 L 14.22 6.72 Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 32 32" {nodes} {...props} />
