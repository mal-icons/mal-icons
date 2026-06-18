<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M 15 6 L 8 26 L 10 26 L 12.09 20 L 19.91 20 L 22 26 L 24 26 L 17 6 Z M 16 8.84 L 19.19 18 L 12.81 18 Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 32 32" {nodes} {...props} />
