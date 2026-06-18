<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M 12.97 4.28 L 11.53 5.72 L 21.81 16 L 11.53 26.28 L 12.97 27.72 L 23.97 16.72 L 24.66 16 L 23.97 15.28 Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 32 32" {nodes} {...props} />
