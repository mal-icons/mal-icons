<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 2a10 10 0 0 1 7.38 16.75"}],["path",{"d":"M12 6v6l4 2"}],["path",{"d":"M2.5 8.88a10 10 0 0 0-0.5 3"}],["path",{"d":"M2.83 16a10 10 0 0 0 2.43 3.4"}],["path",{"d":"M4.64 5.24a10 10 0 0 1 0.89-0.86"}],["path",{"d":"M8.64 21.42a10 10 0 0 0 7.63-0.38"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
