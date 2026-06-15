<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"none","stroke":"currentColor","stroke-width":"2","d":"M2,3.99 C2,2.89 2.9,2 3.99,2 L20.01,2 C21.11,2 22,2.9 22,3.99 L22,20.01 C22,21.11 21.1,22 20.01,22 L3.99,22 C2.89,22 2,21.1 2,20.01 L2,3.99 Z M12,10 L12,18 M12,6 L12,8"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
