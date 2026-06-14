<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["circle",{"cx":"7","cy":"12","r":"3"}],["path",{"d":"M10 9v6"}],["circle",{"cx":"17","cy":"12","r":"3"}],["path",{"d":"M14 7v8"}],["path",{"d":"M22 17v1c0 0.5-0.5 1-1 1H3c-0.5 0-1-0.5-1-1v-1"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
