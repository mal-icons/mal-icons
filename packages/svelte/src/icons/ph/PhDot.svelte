<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 256 256" {nodes} {...props} />
