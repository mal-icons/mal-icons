<script lang="ts">
  import type { NodeTuple } from "@mal-icon/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["rect",{"x":"1","y":"3","width":"15","height":"13"}],["polygon",{"points":"16 8 20 8 23 11 23 16 16 16 16 8"}],["circle",{"cx":"5.5","cy":"18.5","r":"2.5"}],["circle",{"cx":"18.5","cy":"18.5","r":"2.5"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
