<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M13.25 2H2.75a0.750.75 0 0 0 0 1.5h10.5a0.750.75 0 0 0 0-1.5Zm-3 5h-4.5a0.750.75 0 0 0 0 1.5h4.5a0.750.75 0 0 0 0-1.5Zm3 5H2.75a0.750.75 0 0 0 0 1.5h10.5a0.750.75 0 0 0 0-1.5Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
