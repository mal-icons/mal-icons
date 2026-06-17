<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M407.06 376.45C511.35 517.65 270.95 424.99 194.37 328.11c-59.93-75.82 212.35-41.2 101.41-177.47C172.65-0.45-54.16-13.92 65.82 92.69 35.03 6.53 299.82 128.57 311.88 205.35c10.93 69.62-308.9 30.46-112.24 175.66 137.22 101.31 397.83 144.36 207.41-4.55z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 512 512" {nodes} {...props} />
