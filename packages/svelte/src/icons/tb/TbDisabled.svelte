<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9 5a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M11 7l0 8l4 0l4 5"}],["path",{"d":"M11 11l5 0"}],["path",{"d":"M7 11.5a5 5 0 1 0 6 7.5"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
