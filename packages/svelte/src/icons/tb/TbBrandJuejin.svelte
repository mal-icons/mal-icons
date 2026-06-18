<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M2 12l10 7.42l10 -7.42"}],["path",{"d":"M7 9l5 4l5 -4"}],["path",{"d":"M11 6l1 0.8l1 -0.8l-1 -0.8l-1 0.8"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
