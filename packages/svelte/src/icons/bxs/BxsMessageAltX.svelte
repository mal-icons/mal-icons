<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m8.5 18 3.5 4 3.5-4H19c1.1 0 2-0.9 2-2V4c0-1.1-0.9-2-2-2H5c-1.1 0-2 0.9-2 2v12c0 1.10.9 2 2 2h3.5zM7.29 6.71l1.41-1.41L12 8.59l3.29-3.29 1.41 1.41L13.41 10l3.29 3.29-1.41 1.41L12 11.41l-3.29 3.29-1.41-1.41L10.59 10 7.29 6.71z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
