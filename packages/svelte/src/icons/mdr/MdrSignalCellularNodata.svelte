<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M22 13h-7c-1.1 0-2 0.9-2 2v7H4.41c-0.89 0-1.34-1.08-0.71-1.71L20.29 3.71c0.63-0.63 1.71-0.19 1.710.7V13zm-1.7 1.71a11 0 0 0-1.41 0L17.5 16.1l-1.39-1.39a11 0 1 0-1.41 1.41l1.39 1.39-1.39 1.39a11 0 1 0 1.41 1.41l1.39-1.38 1.39 1.38a11 0 1 0 1.41-1.41l-1.38-1.39 1.38-1.39a11 0 0 0 0-1.41z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
