<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M180-120q-24.75 0-42.37-17.62T120-180v-600q0-24.75 17.63-42.37T180-840h600q24.75 0 42.38 17.63T840-780v600q0 24.75-17.62 42.38T780-120H180Zm0-207v147h600v-147H180Zm0-60h600v-393H180v393Zm0 60v147-147Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
