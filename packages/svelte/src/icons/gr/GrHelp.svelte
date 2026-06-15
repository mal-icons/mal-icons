<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M12,23 C12.55,23 13,22.55 13,22 C13,21.45 12.55,21 12,21 C11.45,21 11,21.45 11,22 C11,22.55 11.45,23 12,23 Z M12,18 L12,15 C12,13 13,13 15,12 C17,11 18,9.16 18,7 C18,3.69 15.31,1 12,1 C8.69,1 6,3.69 6,7"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
