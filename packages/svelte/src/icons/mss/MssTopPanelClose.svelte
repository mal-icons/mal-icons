<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M344-297h272L480-433 344-297ZM180-633h600v-147H180v147Zm0 453h600v-393H180v393Zm0-453v-147 147Zm-60 513v-720h720v720H120Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
