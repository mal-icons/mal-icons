<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M5,9 L5,1 L19.5,1 L23,4.5 L23,23 L16,23 M18,1 L18,6 L23,6 M9,14 L9,11 M9,20 C10.66,20 12,18.66 12,17 C12,15.34 10.66,14 9,14 C7.34,14 6,15.34 6,17 C6,18.66 7.34,20 9,20 Z M9,23 L9,20 M12,17 L15,17 M3,17 L6,17 M5,13 L7,15 M11,19 L13,21 M13,13 L11,15 M7,19 L5,21"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
