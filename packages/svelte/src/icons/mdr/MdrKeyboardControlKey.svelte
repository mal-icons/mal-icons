<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5.71 12.71c0.390.39 1.020.39 1.41 0L12 7.83l4.88 4.88a11 0 1 0 1.41-1.41L12.7 5.71a11 0 0 0-1.41 0L5.7 11.3c-0.380.38-0.38 1.020.01 1.41z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
