<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10 4.75a0.750.75 0 0 1 0.75-0.75h8.5a0.750.75 0 0 1 0 1.5h-3.51l-5.83 13h3.34a0.750.75 0 0 1 0 1.5h-8.5a0.750.75 0 0 1 0-1.5h3.51l5.83-13H10.75a0.750.75 0 0 1-0.75-0.75Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
