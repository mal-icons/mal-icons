<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["g",{"data-name":"Credit Card 1"}],["path",{"d":"M19.44,5.14H4.56a2.5,2.5,0,0,0-2.5,2.5v8.72a2.5,2.5,0,0,0,2.5,2.5H19.44a2.5,2.5,0,0,0,2.5-2.5V7.64A2.5,2.5,0,0,0,19.44,5.14ZM3.06,7.64a1.5,1.5,0,0,1,1.5-1.5H19.44a1.5,1.5,0,0,1,1.5,1.5v0.5H3.06Zm17.88,8.72a1.5,1.5,0,0,1-1.5,1.5H4.56a1.5,1.5,0,0,1-1.5-1.5V9.64H20.94Z"}],["path",{"d":"M8.06,14.25h-3a0.50.5,0,1,1,0-1h3a0.50.5,0,1,1,0,1Z"}],["path",{"d":"M18.93,14.25h-6.5a0.50.5,0,1,1,0-1h6.5a0.50.5,0,0,1,0,1Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
