<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11 4h-4a3 3 0 0 0 -3 3v12"}],["path",{"d":"M10 11h-6"}],["path",{"d":"M16 4v13a2 2 0 0 0 2 2h2"}],["path",{"d":"M19 9h-5"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
