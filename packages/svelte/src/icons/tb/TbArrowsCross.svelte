<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16 4h4v4"}],["path",{"d":"M15 9l5 -5"}],["path",{"d":"M4 20l5 -5"}],["path",{"d":"M16 20h4v-4"}],["path",{"d":"M4 4l16 16"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
