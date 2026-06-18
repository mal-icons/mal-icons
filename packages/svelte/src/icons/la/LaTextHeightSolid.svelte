<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M 4 6 L 4 8 L 11 8 L 11 26 L 13 26 L 13 8 L 20 8 L 20 6 Z M 25 6.63 L 21.5 11 L 24 11 L 24 21 L 21.5 21 L 25 25.38 L 28.5 21 L 26 21 L 26 11 L 28.5 11 Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 32 32" {nodes} {...props} />
