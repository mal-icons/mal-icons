<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 20h3"}],["path",{"d":"M17 20h3"}],["path",{"d":"M10.5 20h3"}],["path",{"d":"M4 16h3"}],["path",{"d":"M17 16h3"}],["path",{"d":"M10.5 16h3"}],["path",{"d":"M4 12h3"}],["path",{"d":"M17 12h3"}],["path",{"d":"M10.5 12h3"}],["path",{"d":"M4 8h3"}],["path",{"d":"M17 8h3"}],["path",{"d":"M4 4h3"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
