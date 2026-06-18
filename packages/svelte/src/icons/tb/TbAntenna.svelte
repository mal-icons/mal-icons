<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 4v8"}],["path",{"d":"M16 4.5v7"}],["path",{"d":"M12 5v16"}],["path",{"d":"M8 5.5v5"}],["path",{"d":"M4 6v4"}],["path",{"d":"M20 8h-16"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
