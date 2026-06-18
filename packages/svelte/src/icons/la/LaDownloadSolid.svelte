<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M 15 4 L 15 20.56 L 9.72 15.28 L 8.28 16.72 L 15.28 23.72 L 16 24.41 L 16.72 23.72 L 23.72 16.72 L 22.28 15.28 L 17 20.56 L 17 4 Z M 7 26 L 7 28 L 25 28 L 25 26 Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 32 32" {nodes} {...props} />
