<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M320-490v-60h320v60H320Zm0-160v-60h320v60H320ZM220-390h374l146 190v-620H220v430Zm0 250h490L565-330H220v190Zm580 60H160v-800h640v800Zm-580-60v-680 680Zm0-190v-60 60Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
