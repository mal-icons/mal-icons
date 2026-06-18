<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10 16v5"}],["path",{"d":"M14 16v5"}],["path",{"d":"M9 9h6l-1 7h-4l-1 -7"}],["path",{"d":"M5 11c1.33 -1.33 2.67 -2 4 -2"}],["path",{"d":"M19 11c-1.33 -1.33 -2.67 -2 -4 -2"}],["path",{"d":"M10 4a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
