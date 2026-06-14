<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11.65 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-0.71-1.71l-3.59-3.59A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v10.35"}],["path",{"d":"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{"d":"M8 20v-7l3 1.47"}],["circle",{"cx":"6","cy":"20","r":"2"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
