<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M150 45 0 140.7l150 95.6 150-95.6zm300 0-150 95.6 150 95.6 150-95.6z"}],["path",{"fill":"currentColor","d":"m0 331.8 150 95.5 150-95.5-150-95.6zm450-95.6-150 95.6 150 95.5 150-95.5zM150 459.4l150 95.5 150-95.5-150-95.6z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 600 600" {nodes} {...props} />
