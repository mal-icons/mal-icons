<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M13 14.5v-5.5a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v3"}],["path",{"d":"M18 8v-3a1 1 0 0 0 -1 -1h-13a1 1 0 0 0 -1 1v12a1 1 0 0 0 1 1h8"}],["path",{"d":"M16 9h2"}],["path",{"d":"M17 19a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M19 15.5v1.5"}],["path",{"d":"M19 21v1.5"}],["path",{"d":"M22.03 17.25l-1.3 0.75"}],["path",{"d":"M17.27 20l-1.3 0.75"}],["path",{"d":"M15.97 17.25l1.3 0.75"}],["path",{"d":"M20.73 20l1.3 0.75"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
