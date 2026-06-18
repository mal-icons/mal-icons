<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12.9 19.79l-2.9 -5.79l-7 -3.5a0.55 0.55 0 0 1 0 -1l18 -6.5l-3.49 9.66"}],["path",{"d":"M21.5 21.5l-5 -5"}],["path",{"d":"M16.5 21.5l5 -5"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
