<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M815-365v-85h-85v-60h85v-85h60v85h85v60h-85v85h-60Zm-615 85v-125H40v-275h60v215h100v-215h60v215h48v60h-48v125h-60Zm167 0v-400h309v60H427v280h189v-110h-80v-60h140v230H367Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
