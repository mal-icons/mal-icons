<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m15.15 12.35-5.79 5.79a0.50.5 0 0 1-0.85-0.35V6.21a0.50.5 0 0 1 0.85-0.35l5.79 5.79a0.50.5 0 0 1 0 0.71Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
