<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21 12h-8a1 1 0 1 0 -1 1v8a9 9 0 0 0 9 -9"}],["path",{"d":"M16 9a5 5 0 1 0 -7 7"}],["path",{"d":"M20.49 9a9 9 0 1 0 -11.48 11.5"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
