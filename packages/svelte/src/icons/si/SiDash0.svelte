<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M0 4.42c4.88 0 8.84 3.39 8.84 7.58S4.88 19.58 0 19.58zm16.42 0C20.61 4.42 24 7.81 24 12s-3.39 7.58-7.58 7.58S8.84 16.19 8.84 12s3.39-7.58 7.58-7.58"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
