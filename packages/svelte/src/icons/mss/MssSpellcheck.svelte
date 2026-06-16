<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M563-80 404-239l42-42 117 117 240-240 42 42L563-80ZM120-312l200-527h66l200 527h-67l-54-142H238l-54 142h-64Zm137-200h189l-92-254h-5l-92 254Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
