<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M8 4a0.50.5 0 0 1 0.50.5v5.79l2.15-2.15a0.50.5 0 0 1 0.710.71l-3 3a0.50.5 0 0 1-0.71 0l-3-3a0.50.5 0 1 1 0.71-0.71L7.5 10.29V4.5A0.50.5 0 0 1 8 4"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
