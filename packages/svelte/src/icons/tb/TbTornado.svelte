<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M21 4l-18 0"}],["path",{"d":"M13 16l-6 0"}],["path",{"d":"M11 20l4 0"}],["path",{"d":"M6 8l14 0"}],["path",{"d":"M4 12l12 0"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
