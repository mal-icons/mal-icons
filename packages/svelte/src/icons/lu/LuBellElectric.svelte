<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18.52 17.35A7 7 0 0 1 14 19"}],["path",{"d":"M18.8 4A11 11 0 0 1 20 9"}],["path",{"d":"M9 9h0.01"}],["circle",{"cx":"20","cy":"16","r":"2"}],["circle",{"cx":"9","cy":"9","r":"7"}],["rect",{"x":"4","y":"16","width":"10","height":"6","rx":"2"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
