<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M2.15 2.85a0.50.5 0 1 1 0.71-0.71L8 7.29l5.15-5.15a0.50.5 0 0 1 0.710.71L8.71 8l5.15 5.15a0.50.5 0 0 1-0.710.71L8 8.71l-5.15 5.15a0.50.5 0 0 1-0.71-0.71L7.29 8z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
