<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20.09 11.09l-8.09 -8.09l-9 9h2v7a2 2 0 0 0 2 2h4.5"}],["path",{"d":"M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 1.81 1.14"}],["path",{"d":"M20 21a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M20 16a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M15 19a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M21 16l-5 3l5 2"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
