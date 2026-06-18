<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 2l0 20"}],["path",{"d":"M14 20h-8a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h8"}],["path",{"d":"M20 6a2 2 0 0 0 -2 -2"}],["path",{"d":"M18 20a2 2 0 0 0 2 -2"}],["path",{"d":"M20 10l0 4"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
