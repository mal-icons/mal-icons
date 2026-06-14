<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M2 12.75a0.750.75 0 0 1 0.75-0.75h18.5a0.750.75 0 0 1 0 1.5H2.75a0.750.75 0 0 1-0.75-0.75Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
