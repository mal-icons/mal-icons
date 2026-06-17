<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M14 13.5a0.50.5 0 0 1-0.50.5h-6a0.50.5 0 0 1 0-1h4.79L2.15 2.85a0.50.5 0 1 1 0.71-0.71L13 12.29V7.5a0.50.5 0 0 1 1 0z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
