<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4.08 5h10.83a1.08 1.08 0 0 1 1.08 1.08v8.62c0 2.38 -1.94 4.31 -4.33 4.31h-4.33c-2.39 0 -4.33 -1.93 -4.33 -4.31v-8.61a1.08 1.08 0 0 1 1.08 -1.08"}],["path",{"d":"M16 8h2.5c1.38 0 2.5 1.05 2.5 2.33v2.33c0 1.29 -1.12 2.33 -2.5 2.33h-2.5"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
