<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M13.5 4c4.69 0 8.5 2.69 8.5 6s-3.81 6 -8.5 6c-2.13 0 -4.58 -0.93 -7.36 -2.78l-2.14 1.78v-3.33a46.07 46.07 0 0 1 -2 -1.67a46.07 46.07 0 0 1 2 -1.67v-3.33l2.13 1.78c2.78 -1.85 5.24 -2.78 7.37 -2.78"}],["path",{"d":"M10 15.5v4.5h6v-4"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
