<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3.3 14.3l6.41 6.41a9.02 9.02 0 0 1 -6.32 -6.12l-0.08 -0.29"}],["path",{"d":"M16 13h5c-0.41 3.6 -3.01 6.59 -6.39 7.61l-11.23 -11.23a9 9 0 0 1 15.66 -2.98"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
