<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11.75 4.5a0.750.75 0 0 1 0.750.75V11h5.75a0.750.75 0 0 1 0 1.5H12.5v5.75a0.750.75 0 0 1-1.5 0V12.5H5.25a0.750.75 0 0 1 0-1.5H11V5.25a0.750.75 0 0 1 0.75-0.75Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
