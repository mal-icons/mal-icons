<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M14 4h-4v5c0 1.1-0.35 2.14-1 3h6c-0.63-0.84-1-1.88-1-3V4z","opacity":".3"}],["path",{"d":"M19 12c-1.66 0-3-1.34-3-3V4h1c0.55 0 1-0.45 1-1s-0.45-1-1-1H7c-0.55 0-1 0.45-1 1s0.45 1 1 1h1v5c0 1.66-1.34 3-3 3v2h5.97v7l1 1 1-1v-7H19v-2zM9 12c0.65-0.86 1-1.9 1-3V4h4v5c0 1.120.37 2.16 1 3H9z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
