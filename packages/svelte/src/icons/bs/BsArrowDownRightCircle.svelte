<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.85 5.15a0.50.5 0 1 0-0.710.71L9.24 9.95H6.48a0.50.5 0 1 0 0 1h3.98a0.50.5 0 0 0 0.5-0.5V6.48a0.50.5 0 1 0-1 0v2.77z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
