<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M272.2 117.4 75.7 3.8a28 28 0 0 0-42 24.3v227.3a28 28 0 0 0 42 24.3L272.2 166a28 28 0 0 0 0-48.6m0 316.6L75.7 320.3a28 28 0 0 0-42 24.3V572a28 28 0 0 0 42 24.3l196.5-113.6a28 28 0 0 0 0-48.6m280.2-158.3L355.9 162.1a28 28 0 0 0-42 24.3v227.3a28 28 0 0 0 42 24.3l196.5-113.7a28 28 0 0 0 0-48.6"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 600 600" {nodes} {...props} />
