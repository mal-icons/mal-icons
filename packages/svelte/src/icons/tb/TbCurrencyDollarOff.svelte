<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16.7 8a3 3 0 0 0 -2.7 -2h-4m-2.56 1.43a3 3 0 0 0 2.56 4.57h2m4.56 4.56a3 3 0 0 1 -2.56 1.44h-4a3 3 0 0 1 -2.7 -2"}],["path",{"d":"M12 3v3m0 12v3"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
