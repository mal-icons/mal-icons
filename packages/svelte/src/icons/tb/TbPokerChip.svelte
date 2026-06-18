<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}],["path",{"d":"M7 12a5 5 0 1 0 10 0a5 5 0 1 0 -10 0"}],["path",{"d":"M12 3v4"}],["path",{"d":"M12 17v4"}],["path",{"d":"M3 12h4"}],["path",{"d":"M17 12h4"}],["path",{"d":"M18.36 5.64l-2.83 2.83"}],["path",{"d":"M8.46 15.54l-2.83 2.83"}],["path",{"d":"M5.64 5.64l2.83 2.83"}],["path",{"d":"M15.54 15.54l2.83 2.83"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
