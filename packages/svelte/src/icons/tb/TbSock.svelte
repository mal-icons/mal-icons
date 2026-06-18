<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M13 3v6l4.8 5.14a4 4 0 0 1 -5.44 5.86l-6.74 -6.41a2 2 0 0 1 -0.62 -1.45v-9.14h8"}],["path",{"d":"M7.9 15.77c0.71 -0.72 1.11 -1.68 1.11 -2.77a4 4 0 0 0 -4 -4"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
