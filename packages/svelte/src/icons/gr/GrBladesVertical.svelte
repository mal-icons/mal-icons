<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"stroke":"currentColor","stroke-width":"2","d":"M17 3v4m0 3v4m0 3v4m4-17v2a1 1 0 1-1 1H4a1 1 0 1-1-1V4a1 1 0 11-1h16a1 1 0 11 1zm0 7v2a1 1 0 1-1 1H4a1 1 0 1-1-1v-2a1 1 0 11-1h16a1 1 0 11 1zm0 7v2a1 1 0 1-1 1H4a1 1 0 1-1-1v-2a1 1 0 11-1h16a1 1 0 11 1z"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
