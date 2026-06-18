<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5.23 5.23c-0.15 0.25 -0.23 0.5 -0.23 0.77c0 1.13 1.46 2.12 3.62 2.63m4.36 0.34c3.4 -0.2 6.02 -1.46 6.02 -2.97c0 -1.66 -3.13 -3 -7 -3c-1.64 0 -3.16 0.24 -4.35 0.65"}],["path",{"d":"M5 6v12c0 1.66 3.13 3 7 3c3.25 0 5.97 -0.95 6.77 -2.23m0.23 -3.77v-9"}],["path",{"d":"M3 3l18 18"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
