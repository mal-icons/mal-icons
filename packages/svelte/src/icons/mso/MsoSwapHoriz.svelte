<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M273-160 80-353l193-193 42 42-121 121h316v60H194l121 121-42 42Zm414-254-42-42 121-121H450v-60h316L645-758l42-42 193 193-193 193Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
