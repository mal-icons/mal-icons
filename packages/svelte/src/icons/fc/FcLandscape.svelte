<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["rect",{"fill":"#FF9800","x":"36.1","y":"8.1","transform":"matrix(.707 .707 -.707 .707 21.201 -25.184)","width":"9.9","height":"9.9"}],["rect",{"fill":"#FF9800","x":"36","y":"8","width":"10","height":"10"}],["circle",{"fill":"#FFEB3B","cx":"41","cy":"13","r":"3"}],["polygon",{"fill":"#2E7D32","points":"16.5,18 0,42 33,42"}],["polygon",{"fill":"#4CAF50","points":"33.6,24 19.2,42 48,42"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 48 48" {nodes} {...props} />
