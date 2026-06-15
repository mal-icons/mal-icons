<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8 8H16V15H19V5H5V15H8V8Z","fill":"currentColor","fill-opacity":"0.3"}],["path",{"d":"M5 17H19V20H5V17Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
