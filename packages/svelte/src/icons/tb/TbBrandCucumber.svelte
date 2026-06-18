<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20 10.99c-0.01 5.52 -4.48 10 -10 10.01v-2.26l-0.01 -0.01c-4.28 -1.11 -6.86 -5.47 -5.76 -9.75a8 8 0 0 1 9.74 -5.76c3.53 0.91 6.03 4.13 6.03 7.78v-0.01"}],["path",{"d":"M10.5 8l-0.5 -1"}],["path",{"d":"M13.5 14l0.5 1"}],["path",{"d":"M9 12.5l-1 0.5"}],["path",{"d":"M11 14l-0.5 1"}],["path",{"d":"M13 8l0.5 -1"}],["path",{"d":"M16 12.5l-1 -0.5"}],["path",{"d":"M9 10l-1 -0.5"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
