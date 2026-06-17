<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M164 16l-32 16 32 32 64 16V32l-64-16zm184 0l-64 16v48l64-16 32-32-32-16zM247 32v112h18V32h-18zM16 64l182.7 182.7L96 496h320L313.3 246.7 496 64h-64L256 192 80 64H16z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 512 512" {nodes} {...props} />
