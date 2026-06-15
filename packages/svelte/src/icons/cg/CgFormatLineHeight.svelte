<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5.1 7H7.17L4.17 4L1.17 7H3.1V17H1.16L4.16 20L7.16 17H5.1V7Z","fill":"currentColor"}],["path",{"d":"M22.84 7H8.84V5H22.84V7Z","fill":"currentColor"}],["path",{"d":"M22.84 11H8.84V9H22.84V11Z","fill":"currentColor"}],["path",{"d":"M8.84 15H22.84V13H8.84V15Z","fill":"currentColor"}],["path",{"d":"M22.84 19H8.84V17H22.84V19Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
