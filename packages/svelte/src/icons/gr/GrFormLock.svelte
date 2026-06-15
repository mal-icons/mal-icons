<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M9,11 C9,11 9,8 9,8 C9,6.34 10.34,5 12,5 C13.66,5 15,6.34 15,8 L15,11 M12,13 L12,16 M17,18 L17,11 L7,11 L7,18 L17,18 Z"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
