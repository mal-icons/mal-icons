<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"stroke":"currentColor","stroke-width":"2","d":"M1 12h22M2 22h20a1 1 0 1-1V3a1 1 0 0-1-1H2a1 1 0 0-1 1v18a1 1 0 1 1zM5 8a1 1 0 100-2 1 1 0 0 2zm0 10a1 1 0 100-2 1 1 0 0 2z"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
