<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M12,22 C17.52,22 22,17.52 22,12 C22,6.48 17.52,2 12,2 C6.48,2 2,6.48 2,12 C2,17.52 6.48,22 12,22 Z M10,10 L15,9 L14,14 L9,15 L10,10 Z M12,14 C13.1,14 14,13.1 14,12 C14,10.9 13.1,10 12,10 C10.9,10 10,10.9 10,12 C10,13.1 10.9,14 12,14 Z"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
