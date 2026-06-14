<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18 11h-7.24l1.59-1.59c0.78-0.780.78-2.05 0-2.83-0.78-0.78-2.05-0.78-2.83 0l-6.41 6.41 6.41 6.41c0.390.390.90.59 1.410.59s1.02-0.19 1.41-0.59c0.78-0.780.78-2.05 0-2.83l-1.59-1.59h7.24c1.1 0 2-0.9 2-2 0-1.1-0.9-2-2-2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
