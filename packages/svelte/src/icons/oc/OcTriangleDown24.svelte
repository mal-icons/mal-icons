<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11.65 15.15 5.85 9.35a0.50.5 0 0 1 0.35-0.85h11.59a0.50.5 0 0 1 0.350.85l-5.79 5.79a0.50.5 0 0 1-0.71 0Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
