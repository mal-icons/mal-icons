<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4 11h16a1 1 0 0 1 1 1v0.5c0 1.5 -2.52 5.57 -4 6.5v1a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-1c-1.69 -1.05 -4 -5 -4 -6.5v-0.5a1 1 0 0 1 1 -1"}],["path",{"d":"M18.5 11c0.35 -1.02 0.43 -2.24 0.5 -3.71v-1.29h-2.26c-2.83 0 -4.62 0.8 -5.64 2.08"}],["path",{"d":"M5.26 11.01a12.2 12.2 0 0 1 -0.25 -2.01v-1h1.76c0.98 0 1.8 0.12 2.48 0.35"}],["path",{"d":"M8 8l1 -4l4 2.5"}],["path",{"d":"M13 11v-0.5a2.5 2.5 0 1 0 -5 0v0.5"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
