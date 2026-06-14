<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16.71 13.29c-0.39-0.39-1.02-0.39-1.41 0l-2.29 2.29v-7.59c0-0.55-0.45-1-1-1s-1 0.45-1 1v7.59l-2.29-2.29c-0.39-0.39-1.02-0.39-1.41 0s-0.39 1.02 0 1.41l4.71 4.71 4.71-4.71c0.39-0.390.39-1.02 0-1.41z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
