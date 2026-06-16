<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M475-210v-240h245v90l80-46v152l-80-46v90H475Zm-315 90v-480l320-240 320 240v120h-60v-90L480-765 220-570v390h580v60H160Zm320-352Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
