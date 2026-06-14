<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 5a3 3 0 1 0-60.13 4 4 0 0 0-2.53 5.77 4 4 0 0 0 0.56 6.59A4 4 0 1 0 12 18Z"}],["path",{"d":"M9 13a4.5 4.5 0 0 0 3-4"}],["path",{"d":"M6 5.13A3 3 0 0 0 6.4 6.5"}],["path",{"d":"M3.48 10.9a4 4 0 0 1 0.59-0.4"}],["path",{"d":"M6 18a4 4 0 0 1-1.97-0.52"}],["path",{"d":"M12 13h4"}],["path",{"d":"M12 18h6a2 2 0 0 1 2 2v1"}],["path",{"d":"M12 8h8"}],["path",{"d":"M16 8V5a2 2 0 0 1 2-2"}],["circle",{"cx":"16","cy":"13","r":"0.5"}],["circle",{"cx":"18","cy":"3","r":"0.5"}],["circle",{"cx":"20","cy":"21","r":"0.5"}],["circle",{"cx":"20","cy":"8","r":"0.5"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
