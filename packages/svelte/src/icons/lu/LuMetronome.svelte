<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 11.4V9.1"}],["path",{"d":"m12 17 6.59-6.59"}],["path",{"d":"m15.05 5.7-0.22-0.69a3 3 0 0 0-5.66 0L4.42 19.7A1 1 0 0 0 5.37 21h13.25a1 1 0 0 0 0.95-1.31L18.45 16.2"}],["circle",{"cx":"20","cy":"9","r":"2"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
