<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 6v6l2 1"}],["path",{"d":"M12.34 21.99a10 10 0 1 1 9.59-8.77"}],["path",{"d":"m14 18 4 4 4-4"}],["path",{"d":"M18 14v8"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
