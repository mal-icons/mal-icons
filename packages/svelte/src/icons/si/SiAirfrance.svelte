<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M13.78 3.9L5.18 16.33C4.05 17.97 2.21 19.55 0 19.72v0.38h9.55c2.54 0 4.4-1.66 5.62-3.48L24 3.9Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
