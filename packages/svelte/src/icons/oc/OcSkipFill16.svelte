<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm11.33-2.17a0.830.83 0 0 0-1.17-1.17l-5.5 5.5a0.830.83 0 0 0 1.17 1.17Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
