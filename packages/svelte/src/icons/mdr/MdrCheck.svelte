<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9 16.17 5.53 12.7a11 0 1 0-1.41 1.41l4.18 4.18c0.390.39 1.020.39 1.41 0L20.29 7.71a11 0 1 0-1.41-1.41L9 16.17z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
