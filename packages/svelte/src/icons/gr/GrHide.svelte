<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M12,17 C9.27,17 6,14.22 6,12 C6,9.78 9.27,7 12,7 C14.73,7 18,9.78 18,12 C18,14.22 14.73,17 12,17 Z M11,12 C11,12.55 11.45,13 12,13 C12.55,13 13,12.55 13,12 C13,11.45 12.55,11 12,11 C11.45,11 11,11.45 11,12 Z M20,5 L4,19"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
