<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M 7 5 L 7 28 L 8.59 26.81 L 16 21.25 L 23.41 26.81 L 25 28 L 25 5 Z M 9 7 L 23 7 L 23 24 L 16.59 19.19 L 16 18.75 L 15.41 19.19 L 9 24 Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 32 32" {nodes} {...props} />
