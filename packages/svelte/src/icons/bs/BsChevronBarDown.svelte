<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M3.65 4.15a0.50.5 0 0 1 0.71 0L8 7.79l3.65-3.65a0.50.5 0 0 1 0.710.71l-4 4a0.50.5 0 0 1-0.71 0l-4-4a0.50.5 0 0 1 0-0.71M1 11.5a0.50.5 0 0 1 0.5-0.5h13a0.50.5 0 0 1 0 1h-13a0.50.5 0 0 1-0.5-0.5"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
