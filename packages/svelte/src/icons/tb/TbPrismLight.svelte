<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4.73 19h11.54a1 1 0 0 0 0.87 -1.5l-5.77 -10a1 1 0 0 0 -1.73 0l-5.77 10a1 1 0 0 0 0.87 1.5"}],["path",{"d":"M2 13h4.45"}],["path",{"d":"M18 5l-4.5 6"}],["path",{"d":"M22 9l-7.75 3.25"}],["path",{"d":"M22 15l-7 -1.5"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
