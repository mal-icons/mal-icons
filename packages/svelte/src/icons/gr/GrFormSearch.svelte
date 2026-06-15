<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M13.8,13.8 L18,18 L13.8,13.8 Z M10.5,15 C12.99,15 15,12.99 15,10.5 C15,8.01 12.99,6 10.5,6 C8.01,6 6,8.01 6,10.5 C6,12.99 8.01,15 10.5,15 Z"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
