<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4.5 6.75h6a0.750.75 0 0 1 0 1.5h-6a0.750.75 0 0 1 0-1.5Z"}],["path",{"d":"M0 7.5a7.5 7.5 0 1 1 13.31 4.75l2.47 2.47a0.750.75 0 1 1-1.06 1.06l-2.47-2.47A7.5 7.5 0 0 1 0 7.5Zm7.5-6a6 6 0 1 0 0 12 6 6 0 0 0 0-12Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
