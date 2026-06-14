<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M14.41 5.59c-0.78-0.78-2.05-0.78-2.83 0l-6.41 6.41 6.42 6.41c0.390.390.90.59 1.410.59s1.02-0.19 1.41-0.59c0.78-0.780.78-2.05 0-2.83l-3.58-3.59 3.59-3.59c0.78-0.780.78-2.05 0-2.83z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
