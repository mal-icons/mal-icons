<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 6h16"}],["path",{"d":"M6 12h10"}],["path",{"d":"M9 18h3"}],["path",{"d":"M19 18v0.01m2.12 2.11c0.42 -0.42 0.71 -0.95 0.82 -1.54c0.12 -0.58 0.06 -1.18 -0.17 -1.73c-0.23 -0.55 -0.61 -1.02 -1.1 -1.35c-0.49 -0.33 -1.07 -0.51 -1.67 -0.51c-0.59 0 -1.17 0.18 -1.67 0.51c-0.49 0.33 -0.88 0.8 -1.1 1.35c-0.23 0.55 -0.29 1.15 -0.17 1.73c0.12 0.58 0.4 1.12 0.82 1.54c0.42 0.42 1.13 1.05 2.12 1.88c1.05 -0.89 1.76 -1.52 2.12 -1.88l-2.12 -2.12"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
