<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 15h-6.5a2.5 2.5 0 1 1 0 -5h0.5"}],["path",{"d":"M15 12v6.5a2.5 2.5 0 1 1 -5 0v-0.5"}],["path",{"d":"M12 9h6.5a2.5 2.5 0 1 1 0 5h-0.5"}],["path",{"d":"M9 12v-6.5a2.5 2.5 0 0 1 5 0v0.5"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
