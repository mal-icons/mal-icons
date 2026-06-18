<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16.54 7c-0.8 -2.37 -2.54 -4 -4.54 -4c-2.77 0 -5.02 2.63 -5.02 6.5c0 1.96 1.58 4.73 2.51 6"}],["path",{"d":"M4.71 11.98c-1.66 1.88 -2.21 4.18 -1.21 5.91c1.39 2.39 5.14 2.83 8.5 0.9c1.7 -0.98 2.88 -3.36 3.52 -4.8"}],["path",{"d":"M15.01 19.99c2.51 0 4.52 -0.44 5.49 -2.1c1.39 -2.39 -0.21 -5.89 -3.58 -7.82c-1.7 -0.98 -4.36 -1.24 -5.93 -1.07"}],["path",{"d":"M10.49 9.86c0.48 0.28 1.1 0.11 1.37 -0.37a1 1 0 0 0 -0.37 -1.36a1.01 1.01 0 0 0 -1.37 0.37a1 1 0 0 0 0.37 1.37"}],["path",{"d":"M8.5 15.5a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}],["path",{"d":"M14.5 14a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
