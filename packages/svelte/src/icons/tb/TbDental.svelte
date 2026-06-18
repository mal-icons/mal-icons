<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 5.5c-1.07 -0.59 -2.58 -1.5 -4 -1.5c-2.1 0 -4 1.25 -4 5c0 4.9 1.06 8.41 2.67 10.54c0.57 0.76 1.97 0.52 2.57 -0.24c0.4 -0.5 0.82 -1.44 1.26 -2.8c0.29 -0.77 0.89 -1.5 1.5 -1.5c0.6 0 1.21 0.74 1.5 1.5c0.44 1.36 0.86 2.3 1.26 2.8c0.6 0.76 2 0.99 2.57 0.24c1.62 -2.13 2.67 -5.64 2.67 -10.54c0 -3.74 -1.91 -5 -4 -5c-1.42 0 -2.92 0.91 -4 1.5"}],["path",{"d":"M12 5.5l3 1.5"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
