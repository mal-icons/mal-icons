<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M300 0A240 240 0 0 0 60 240h120a120 120 0 0 1 120-120z"}],["path",{"fill":"currentColor","d":"M540 240A240 240 0 0 0 300 0v120a120 120 0 0 1 120 120z"}],["path",{"fill":"currentColor","d":"M300 480a240 240 0 0 0 240-240H420a120 120 0 0 1-120 120z"}],["path",{"fill":"currentColor","d":"M180 480V240H60v360h240V480z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 600 600" {nodes} {...props} />
