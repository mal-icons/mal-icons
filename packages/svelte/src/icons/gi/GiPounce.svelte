<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M196 16l60 60 60-60H196zm-30 90l90 90 90-90H166zm-30 120l120 120 120-120H136zm121.75 150.03A60 60 0 0 0 196 436a60 60 0 0 0 120 0 60 60 0 0 0-58.25-59.97z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 512 512" {nodes} {...props} />
