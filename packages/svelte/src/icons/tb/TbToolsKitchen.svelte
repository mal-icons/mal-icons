<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 3h8l-1 9h-6l-1 -9"}],["path",{"d":"M7 18h2v3h-2l0 -3"}],["path",{"d":"M20 3v12h-5c-0.02 -3.68 0.18 -7.41 5 -12"}],["path",{"d":"M20 15v6h-1v-3"}],["path",{"d":"M8 12l0 6"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
