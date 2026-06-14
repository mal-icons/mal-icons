<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11.93 8.5a4 4 0 0 1-7.86 0H0.75a0.750.75 0 0 1 0-1.5h3.32a4 4 0 0 1 7.86 0h3.32a0.750.75 0 0 1 0 1.5Zm-1.43-0.75a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
