<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M 2 8 L 2 24 L 24 24 L 24 20.63 L 30 23.63 L 30 8.38 L 24 11.38 L 24 8 Z M 4 10 L 22 10 L 22 22 L 4 22 Z M 28 11.63 L 28 20.38 L 24 18.38 L 24 13.63 Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 32 32" {nodes} {...props} />
