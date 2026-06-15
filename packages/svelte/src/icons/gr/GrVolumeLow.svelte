<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M1,8 L1,16 L6.1,16 L12,21 L12,3 L6,8 L1,8 Z M15,16 L15,16 C17.21,16 19,14.21 19,12 C19,9.79 17.21,8 15,8"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
