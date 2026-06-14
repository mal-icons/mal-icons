<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10.5 5H19a2 2 0 0 1 2 2v8.5"}],["path",{"d":"M17 11h-0.5"}],["path",{"d":"M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2"}],["path",{"d":"m2 2 20 20"}],["path",{"d":"M7 11h4"}],["path",{"d":"M7 15h2.5"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
