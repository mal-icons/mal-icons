<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M6 12.5a0.50.5 0 0 1 0.5-0.5h7a0.50.5 0 0 1 0 1h-7a0.50.5 0 0 1-0.5-0.5m-4-3a0.50.5 0 0 1 0.5-0.5h11a0.50.5 0 0 1 0 1h-11a0.50.5 0 0 1-0.5-0.5m4-3a0.50.5 0 0 1 0.5-0.5h7a0.50.5 0 0 1 0 1h-7a0.50.5 0 0 1-0.5-0.5m-4-3a0.50.5 0 0 1 0.5-0.5h11a0.50.5 0 0 1 0 1h-11a0.50.5 0 0 1-0.5-0.5"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
