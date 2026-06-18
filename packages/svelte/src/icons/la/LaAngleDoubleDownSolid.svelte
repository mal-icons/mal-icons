<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M 5.22 6.69 L 3.78 8.09 L 16 20.31 L 28.22 8.09 L 26.78 6.69 L 16 17.47 Z M 5.22 13.69 L 3.78 15.09 L 16 27.31 L 28.22 15.09 L 26.78 13.69 L 16 24.47 Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 32 32" {nodes} {...props} />
