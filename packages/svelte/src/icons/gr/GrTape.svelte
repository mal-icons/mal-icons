<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M2,2 L22,2 L22,22 L2,22 L2,2 Z M19,12 C19,15.87 15.87,19 12,19 C8.13,19 5,15.87 5,12 C5,8.13 8.13,5 12,5 C15.87,5 19,8.13 19,12 L19,12 Z M12,9 C10.35,9 9,10.35 9,12 C9,13.65 10.35,15 12,15 C13.65,15 15,13.65 15,12 C15,10.35 13.65,9 12,9 Z"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
