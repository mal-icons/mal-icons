<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3.75 5.25a0.750.75 0 0 0 0 1.5h16.5a0.750.75 0 0 0 0-1.5H3.75Zm0 6a0.750.75 0 0 0 0 1.5h16.5a0.750.75 0 0 0 0-1.5H3.75Zm0 6a0.750.75 0 0 0 0 1.5h16.5a0.750.75 0 0 0 0-1.5H3.75Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
