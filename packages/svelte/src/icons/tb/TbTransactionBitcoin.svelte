<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15 12h4.09c1.06 0 1.91 0.9 1.91 2s-0.85 2 -1.91 2c1.06 0 1.91 0.9 1.91 2s-0.85 2 -1.91 2h-4.09"}],["path",{"d":"M16 16h4"}],["path",{"d":"M16 11v10v-9"}],["path",{"d":"M19 11v1"}],["path",{"d":"M19 20v1"}],["path",{"d":"M3 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M15 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M7 5h8"}],["path",{"d":"M7 5v8a3 3 0 0 0 3 3h1"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
