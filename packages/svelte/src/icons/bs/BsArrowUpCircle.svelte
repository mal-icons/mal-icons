<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-7.5 3.5a0.50.5 0 0 1-1 0V5.71L5.35 7.85a0.50.5 0 1 1-0.71-0.71l3-3a0.50.5 0 0 1 0.71 0l3 3a0.50.5 0 0 1-0.710.71L8.5 5.71z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
