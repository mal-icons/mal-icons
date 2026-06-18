<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8 9h8"}],["path",{"d":"M8 13h3.5"}],["path",{"d":"M10.5 19.5l-1.5 -1.5h-3a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4"}],["path",{"d":"M18 22l3.35 -3.28a2.14 2.14 0 0 0 0.01 -3.07a2.24 2.24 0 0 0 -3.13 -0.01l-0.22 0.22l-0.22 -0.22a2.24 2.24 0 0 0 -3.13 -0.01a2.14 2.14 0 0 0 -0.01 3.07l3.36 3.3"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
