<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17.29 5.71a11 0 0 0-1.41 0L12 9.58 8.11 5.7A11 0 1 0 6.7 7.11l4.59 4.59c0.390.39 1.020.39 1.41 0l4.59-4.59a0.980.98 0 0 0 0-1.4z"}],["path",{"d":"M17.29 12.3a11 0 0 0-1.41 0L12 16.17l-3.88-3.88a11 0 1 0-1.41 1.41l4.59 4.59c0.390.39 1.020.39 1.41 0l4.59-4.59a0.990.99 0 0 0-0.01-1.4z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
