<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m12.35 8.85 5.79 5.79a0.50.5 0 0 1-0.350.85H6.21a0.50.5 0 0 1-0.35-0.85l5.79-5.79a0.50.5 0 0 1 0.71 0Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
