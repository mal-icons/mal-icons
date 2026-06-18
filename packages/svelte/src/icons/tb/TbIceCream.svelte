<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 21.5v-4.5"}],["path",{"d":"M8 17h8v-10a4 4 0 1 0 -8 0v10"}],["path",{"d":"M8 10.5l8 -3.5"}],["path",{"d":"M8 14.5l8 -3.5"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
