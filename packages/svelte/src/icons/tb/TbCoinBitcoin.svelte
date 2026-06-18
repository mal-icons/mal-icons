<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}],["path",{"d":"M9 8h4.09c1.06 0 1.91 0.9 1.91 2s-0.85 2 -1.91 2c1.06 0 1.91 0.9 1.91 2s-0.85 2 -1.91 2h-4.09"}],["path",{"d":"M10 12h4"}],["path",{"d":"M10 7v10v-9"}],["path",{"d":"M13 7v1"}],["path",{"d":"M13 16v1"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
