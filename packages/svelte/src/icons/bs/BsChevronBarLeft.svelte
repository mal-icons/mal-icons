<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M11.85 3.65a0.50.5 0 0 1 0 0.71L8.21 8l3.65 3.65a0.50.5 0 0 1-0.710.71l-4-4a0.50.5 0 0 1 0-0.71l4-4a0.50.5 0 0 1 0.71 0M4.5 1a0.50.5 0 0 0-0.50.5v13a0.50.5 0 0 0 1 0v-13a0.50.5 0 0 0-0.5-0.5"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
