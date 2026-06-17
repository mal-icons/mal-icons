<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M452.8 479.46L59.21 481.31s154.38-369.68 151.15-379.3l-46.12-0.22 93.68-71.09 95.21 72.4-50.260.22z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 512 512" {nodes} {...props} />
