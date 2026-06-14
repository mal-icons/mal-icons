<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"m342.9 400 171.4-120.5H342.9z"}],["path",{"fill":"currentColor","d":"m211 240-89.6 133.8-7.1 11.4h-0.5L0 557.2V42.8z"}],["path",{"fill":"currentColor","d":"M514.3 157.1H342.9V43H600z"}],["path",{"fill":"currentColor","d":"M342.9 42.9V557L114.3 385.2l7.1-11.4L211 240z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 600 600" {nodes} {...props} />
