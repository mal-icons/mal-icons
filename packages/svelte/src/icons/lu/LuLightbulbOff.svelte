<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16.8 11.2c0.8-0.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5"}],["path",{"d":"m2 2 20 20"}],["path",{"d":"M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c0.70.7 1.3 1.5 1.5 2.5"}],["path",{"d":"M9 18h6"}],["path",{"d":"M10 22h4"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
