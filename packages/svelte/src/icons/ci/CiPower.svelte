<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6.64,5.21a8.78,8.78,0,1,0,13.92,8.96,8.87,8.87,0,0,0-3.19-8.96c-0.5-0.39-1.210.31-0.710.71a7.93,7.93,0,0,1,3.08,7.11,7.79,7.79,0,0,1-15.310.96A7.9,7.9,0,0,1,7.35,5.92c0.51-0.39-0.2-1.1-0.71-0.71Z"}],["path",{"d":"M12.5,12.52a0.50.5,0,0,1-1,0V3.55h0a0.50.5,0,0,1,1,0Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
