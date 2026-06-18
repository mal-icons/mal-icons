<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["circle",{"cx":"4","cy":"7","r":"2"}],["circle",{"cx":"9","cy":"12","r":"2"}],["circle",{"cx":"15","cy":"7","r":"2"}],["circle",{"cx":"15","cy":"12","r":"2"}],["circle",{"cx":"15","cy":"17","r":"2"}],["circle",{"cx":"20","cy":"7","r":"2"}],["circle",{"cx":"4","cy":"17","r":"2"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
