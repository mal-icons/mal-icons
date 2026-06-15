<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M7 6.92V6a4.72 4.72 0 15-5 4.72 4.72 0 15 5v5.05M12 23a7 7 0 10-7-7 7 7 0 7 7zm2.99-7h-5.97"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
