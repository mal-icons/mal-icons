<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M480-433 344-297h272L480-433ZM180-120q-24.75 0-42.37-17.62T120-180v-600q0-24.75 17.63-42.37T180-840h600q24.75 0 42.38 17.63T840-780v600q0 24.75-17.62 42.38T780-120H180Zm600-513v-147H180v147h600Zm-600 60v393h600v-393H180Zm0-60v-147 147Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
