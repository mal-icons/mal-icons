<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M600 105.1 525 235l-74.8-129.8zm-400 86.6h-50l125 216.6-50 86.6L0 105h250l125 216.6 25-43.4L300 105h100l50 86.6 50 86.6L375 495z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 600 600" {nodes} {...props} />
