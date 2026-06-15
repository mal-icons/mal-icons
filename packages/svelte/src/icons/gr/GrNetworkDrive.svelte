<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"stroke":"currentColor","stroke-width":"2","d":"M12 14v4M22 6v6a1 1 0 1-1 1H3a1 1 0 1-1-1V6a1 1 0 11-1h18a1 1 0 11 1zM12 21a2 2 0 100-4 2 2 0 0 4zM6 10a1 1 0 100-2 1 1 0 0 2z"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
