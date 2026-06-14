<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["rect",{"width":"18","height":"18","x":"3","y":"3","rx":"2"}],["circle",{"cx":"7.5","cy":"7.5","r":"0.5","fill":"currentColor"}],["path",{"d":"m7.9 7.9 2.7 2.7"}],["circle",{"cx":"16.5","cy":"7.5","r":"0.5","fill":"currentColor"}],["path",{"d":"m13.4 10.6 2.7-2.7"}],["circle",{"cx":"7.5","cy":"16.5","r":"0.5","fill":"currentColor"}],["path",{"d":"m7.9 16.1 2.7-2.7"}],["circle",{"cx":"16.5","cy":"16.5","r":"0.5","fill":"currentColor"}],["path",{"d":"m13.4 13.4 2.7 2.7"}],["circle",{"cx":"12","cy":"12","r":"2"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
