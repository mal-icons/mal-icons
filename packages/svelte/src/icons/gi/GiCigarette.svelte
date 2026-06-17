<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M224 32c9.04 24.71 106.98 58.72 156.1 64-37.1 7.89-53.04 10.52-57.54 32-13.08 62.38 191.48 60.48 115.73 152.22 69.11-15.79 57.92-116.2 15.89-129.84-27.24-8.84-63.75-11.67-47.75-38.38C425.96 88.1 503.57 59.74 448 32zM28.1 292v64h87v-64zm105 0v64h274v-64zm292 0v64h16v-64zm34 0v64h17v-64z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 512 512" {nodes} {...props} />
