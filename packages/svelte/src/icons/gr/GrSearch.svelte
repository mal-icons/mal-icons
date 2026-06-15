<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M15,15 L22,22 L15,15 Z M9.5,17 C13.64,17 17,13.64 17,9.5 C17,5.36 13.64,2 9.5,2 C5.36,2 2,5.36 2,9.5 C2,13.64 5.36,17 9.5,17 Z"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
