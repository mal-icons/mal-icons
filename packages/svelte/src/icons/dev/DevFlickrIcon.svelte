<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M466.7 433.3a133.3 133.3 0 1 0 0-266.6 133.3 133.3 0 0 0 0 266.6"}],["path",{"fill":"currentColor","d":"M133.3 433.3a133.3 133.3 0 1 0 0-266.6 133.3 133.3 0 0 0 0 266.6"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 600 600" {nodes} {...props} />
