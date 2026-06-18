<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16.13 5.27l-4.51 4.47 2.68 2.66 1.83-1.81 5.19 5.15L24 13.08zM8.13 8.27L0 16.07l2.77 2.66 5.36-5.14 5.36 5.15 2.77-2.66z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
