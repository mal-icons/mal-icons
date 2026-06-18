<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9 15l-5 -5c-1.37 -1.37 -1.37 -3.63 0 -5s3.63 -1.37 5 0l5 5"}],["path",{"d":"M5.5 11.5l5 -5"}],["path",{"d":"M21 12l-9 9"}],["path",{"d":"M21 12v4"}],["path",{"d":"M21 12h-4"}]];
  const defaultAttr = {"fill":"none","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
