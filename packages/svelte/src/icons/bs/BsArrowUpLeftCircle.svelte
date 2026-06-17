<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-5.9 2.8a0.50.5 0 1 0 0.71-0.71L6.71 6h2.77a0.50.5 0 1 0 0-1H5.5a0.50.5 0 0 0-0.50.5v3.98a0.50.5 0 0 0 1 0V6.71z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
