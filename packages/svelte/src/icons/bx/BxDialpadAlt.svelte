<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["circle",{"cx":"12","cy":"6","r":"2"}],["circle",{"cx":"6","cy":"6","r":"2"}],["circle",{"cx":"18","cy":"6","r":"2"}],["circle",{"cx":"12","cy":"12","r":"2"}],["circle",{"cx":"6","cy":"12","r":"2"}],["circle",{"cx":"18","cy":"12","r":"2"}],["circle",{"cx":"12","cy":"18","r":"2"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
