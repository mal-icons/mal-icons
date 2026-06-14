<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20.25 3H3.75a0.750.75 0 0 0 0 1.5h16.5a0.750.75 0 0 0 0-1.5Zm-4 8h-8.5a0.750.75 0 0 0 0 1.5h8.5a0.750.75 0 0 0 0-1.5Zm4 8H3.75a0.750.75 0 0 0 0 1.5h16.5a0.750.75 0 0 0 0-1.5Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
