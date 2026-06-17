<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M7.35 5.65a0.50.5 0 1 0-0.710.71L7.79 7.5 6.65 8.65a0.50.5 0 1 0 0.710.71L8.5 8.21l1.15 1.15a0.50.5 0 0 0 0.71-0.71L9.21 7.5l1.15-1.15a0.50.5 0 0 0-0.71-0.71L8.5 6.79z"}],["path",{"d":"M0.5 1a0.50.5 0 0 0 0 1h1.11l0.4 1.61 1.5 7.99A0.50.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a0.50.5 0 0 0 0.49-0.41l1.5-8A0.50.5 0 0 0 14.5 3H2.89l-0.4-1.62A0.50.5 0 0 0 2 1zm3.92 10L3.1 4h10.8l-1.31 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
