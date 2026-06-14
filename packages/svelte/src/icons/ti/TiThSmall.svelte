<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["circle",{"cx":"5","cy":"19","r":"2.5"}],["circle",{"cx":"5","cy":"12","r":"2.5"}],["circle",{"cx":"5","cy":"5","r":"2.5"}],["circle",{"cx":"12","cy":"19","r":"2.5"}],["circle",{"cx":"12","cy":"12","r":"2.5"}],["circle",{"cx":"12","cy":"5","r":"2.5"}],["circle",{"cx":"19","cy":"19","r":"2.5"}],["circle",{"cx":"19","cy":"12","r":"2.5"}],["circle",{"cx":"19","cy":"5","r":"2.5"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
