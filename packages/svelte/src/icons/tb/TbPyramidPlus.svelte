<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M18.72 11.99l-5.89 -9.54a1 1 0 0 0 -1.66 0l-8.54 13.84a1 1 0 0 0 0.39 1.45l8.09 4.05a1.99 1.99 0 0 0 1.79 0l0.15 -0.07"}],["path",{"d":"M12 2v20"}],["path",{"d":"M16 19h6"}],["path",{"d":"M19 16v6"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
