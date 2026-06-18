<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M 28.28 6.28 L 11 23.56 L 3.72 16.28 L 2.28 17.72 L 10.28 25.72 L 11 26.41 L 11.72 25.72 L 29.72 7.72 Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 32 32" {nodes} {...props} />
