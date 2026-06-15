<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M5,1 L19,1 L19,1 C20.1,1 21,1.9 21,3 L21,18 L21,18 C21,19.1 20.1,20 19,20 L5,20 L5,20 C3.9,20 3,19.1 3,18 L3,3 L3,3 C3,1.9 3.9,1 5,1 Z M9,2 L15,2 M3,5 L21,5 M4,23 L20,23 M3,12 L21,12 M7,17 C7.55,17 8,16.55 8,16 C8,15.45 7.55,15 7,15 C6.45,15 6,15.45 6,16 C6,16.55 6.45,17 7,17 Z M17,17 C17.55,17 18,16.55 18,16 C18,15.45 17.55,15 17,15 C16.45,15 16,15.45 16,16 C16,16.55 16.45,17 17,17 Z M12,5 L12,12 M9,20 L7,23 M15,20 L17,23"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
