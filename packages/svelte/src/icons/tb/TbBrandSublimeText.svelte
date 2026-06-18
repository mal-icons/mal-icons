<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19 8l-14 4.5v-5.5l14 -4.5l0 5.5"}],["path",{"d":"M19 17l-14 4.5v-5.5l14 -4.5l0 5.5"}],["path",{"d":"M19 11.5l-14 -4.5"}],["path",{"d":"M5 12.5l14 4.5"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
