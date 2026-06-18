<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M 23.28 7.28 L 11.5 19.06 L 8.72 16.28 L 7.28 17.72 L 10.06 20.5 L 8 22.56 L 1.72 16.28 L 0.28 17.72 L 7.28 24.72 L 8 25.41 L 8.72 24.72 L 11.5 21.94 L 14.28 24.72 L 15 25.41 L 15.72 24.72 L 31.63 8.72 L 30.19 7.28 L 15 22.56 L 12.94 20.5 L 24.72 8.72 Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 32 32" {nodes} {...props} />
