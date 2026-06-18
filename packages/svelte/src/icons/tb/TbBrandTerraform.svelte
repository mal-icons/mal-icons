<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15 15.5l-11.48 -6.22a1 1 0 0 1 -0.52 -0.88v-4.05a1.35 1.35 0 0 1 2.03 -1.17l9.97 5.82v10.65a1.35 1.35 0 0 1 -2.03 1.17l-3.47 -2.03a1 1 0 0 1 -0.5 -0.86v-11.93"}],["path",{"d":"M15 15.5l5.5 -3.21a1 1 0 0 0 0.5 -0.86v-3.58a1.35 1.35 0 0 0 -2.03 -1.17l-3.97 2.32"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
