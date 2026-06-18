<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21 12a9 9 0 1 0 -9.97 8.95"}],["path",{"d":"M3.6 9h16.8"}],["path",{"d":"M3.6 15h6.4"}],["path",{"d":"M11.5 3a17 17 0 0 0 -1.89 13.8"}],["path",{"d":"M12.5 3a16.98 16.98 0 0 1 2.55 8.01"}],["path",{"d":"M17.8 20.82l-2.17 1.14a0.39 0.39 0 0 1 -0.57 -0.41l0.42 -2.41l-1.76 -1.71a0.39 0.39 0 0 1 0.22 -0.66l2.43 -0.35l1.09 -2.19a0.39 0.39 0 0 1 0.7 0l1.09 2.19l2.43 0.35a0.39 0.39 0 0 1 0.22 0.67l-1.76 1.71l0.41 2.41a0.39 0.39 0 0 1 -0.57 0.41l-2.17 -1.14"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
