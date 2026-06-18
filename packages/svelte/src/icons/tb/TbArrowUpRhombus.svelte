<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 16v-13"}],["path",{"d":"M15 6l-3 -3l-3 3"}],["path",{"d":"M14.5 18.5l-2.5 2.5l-2.5 -2.5l2.5 -2.5l2.5 2.5"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
