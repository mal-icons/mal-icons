<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M256 16c-52.5 252.63-210 277.85 0 454.69C466 293.85 308.5 268.63 256 16zM124.75 167.41C98.5 243.2 46 294.12 46 369.91S151 496 229.75 496c-157.5-126.32-105-202.28-105-328.59zm262.5 0c0 126.32 52.5 202.28-105 328.59C361 496 466 445.7 466 369.91c0-75.79-52.5-126.71-78.75-202.5z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 512 512" {nodes} {...props} />
