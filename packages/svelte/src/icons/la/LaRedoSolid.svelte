<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M 19.22 5.28 L 17.78 6.72 L 24.06 13 L 11 13 C 7.16 13 4 16.16 4 20 L 4 27 L 6 27 L 6 20 C 6 17.25 8.25 15 11 15 L 24.06 15 L 17.78 21.28 L 19.22 22.72 L 27.22 14.72 L 27.91 14 L 27.22 13.28 Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 32 32" {nodes} {...props} />
