<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M406.04 316c24.11 96.44-50.59 180-150 180s-174.4-82.38-150-180c15-60 90-150 150-300 60 150 135 240 150 300z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 512 512" {nodes} {...props} />
