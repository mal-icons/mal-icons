<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["circle",{"cx":"19","cy":"3","r":"3"}],["path",{"d":"M6 8V6h9.03a4.91 4.91 0 0 1-0.92-4H2.01L2 22l4-4h16V6.97C21.16 7.61 20.13 8 19 8H6zm8 6H6v-2h8v2zm4-3H6V9h12v2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
