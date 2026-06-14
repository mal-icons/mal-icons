<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M495.9 400H300v200h195.9z"}],["path",{"fill":"currentColor","d":"M300 0 104.1 200v200H300l195.8-200V0z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 600 600" {nodes} {...props} />
