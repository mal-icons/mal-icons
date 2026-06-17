<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M9.5 2a0.50.5 0 0 1 0-1h5a0.50.5 0 0 1 0.50.5v5a0.50.5 0 0 1-1 0V2.71L9.87 6.84a5 5 0 1 1-0.71-0.71L13.29 2zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
