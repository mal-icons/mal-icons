<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9 8v-1h-6v1"}],["path",{"d":"M6 15v-8"}],["path",{"d":"M21 15l-5 -8"}],["path",{"d":"M16 15l5 -8"}],["path",{"d":"M14 11h-4v8h4"}],["path",{"d":"M10 15h3"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
