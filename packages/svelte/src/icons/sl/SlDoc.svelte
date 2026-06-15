<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M560 0H208c-35.34 0-64 28.66-64 64v896c0 35.34 28.66 64 64 64h608c35.34 0 64-28.66 64-64V320.02zm256 346.53V352H528V64h5.5zM208 960V64h256v352h352v544H208z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 1024 1024" {nodes} {...props} />
