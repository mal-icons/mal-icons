<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10 11a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M10 11v-2.57c0 -0.18 0.01 -0.36 0.04 -0.54l0.72 -4.83c0.06 -0.6 0.6 -1.06 1.24 -1.06s1.18 0.47 1.24 1.06l0.72 4.83c0.03 0.18 0.04 0.36 0.04 0.54v2.57"}],["path",{"d":"M13.01 9.28l2.24 1.28c0.16 0.09 0.31 0.19 0.45 0.3l3.84 2.91c0.49 0.35 0.62 1.04 0.3 1.6c-0.32 0.56 -1 0.78 -1.55 0.54l-4.55 -1.68a3.62 3.62 0 0 1 -0.49 -0.23l-2.23 -1.28"}],["path",{"d":"M13 12.72l-2.24 1.28a3.62 3.62 0 0 1 -0.48 0.23l-4.55 1.68c-0.55 0.24 -1.22 0.02 -1.55 -0.54c-0.32 -0.56 -0.19 -1.25 0.3 -1.6l3.84 -2.91a3.41 3.41 0 0 1 0.45 -0.3l2.24 -1.28"}],["path",{"d":"M7 21h10"}],["path",{"d":"M10 21l1 -7"}],["path",{"d":"M13 14l1 7"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
