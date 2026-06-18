<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 3l18 18"}],["path",{"d":"M8.47 8.46a5 5 0 0 0 7.06 7.08"}],["path",{"d":"M16.91 12.94a5 5 0 0 0 -5.83 -5.85"}],["path",{"d":"M12 7v-4"}],["path",{"d":"M11 3h2"}],["path",{"d":"M15.54 8.46l2.83 -2.83"}],["path",{"d":"M17.66 4.93l1.41 1.41"}],["path",{"d":"M17 12h4"}],["path",{"d":"M21 11v2"}],["path",{"d":"M18.36 18.36l-0.71 0.71"}],["path",{"d":"M12 17v4"}],["path",{"d":"M13 21h-2"}],["path",{"d":"M8.47 15.54l-2.83 2.83"}],["path",{"d":"M6.34 19.07l-1.41 -1.41"}],["path",{"d":"M7 12h-4"}],["path",{"d":"M3 13v-2"}],["path",{"d":"M5.64 5.64l-0.71 0.71"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
