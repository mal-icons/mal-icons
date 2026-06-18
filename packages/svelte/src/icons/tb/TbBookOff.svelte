<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 19a9 9 0 0 1 9 0a9 9 0 0 1 5.9 -1.1"}],["path",{"d":"M3 6a9 9 0 0 1 2.11 -0.88m3.8 -0.21c1.07 0.17 2.12 0.53 3.09 1.09a9 9 0 0 1 9 0"}],["path",{"d":"M3 6v13"}],["path",{"d":"M12 6v2m0 4v7"}],["path",{"d":"M21 6v11"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
