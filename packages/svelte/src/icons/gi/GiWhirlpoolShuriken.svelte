<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M286.08 121.04l45.12-103.48-93.43 69.01-0.39-0.28-0.060.62-105.5 77.93-83.85-76.77 35.53 112.46-0.110.080.160.07 39.19 124.03-98.88 60.21 249.36-5.87L298.8 494.44l75.66-240.18 113.68 11zm-46.45 177.91c-32.1 0-58.11-26.02-58.11-58.11 0-32.1 26.02-58.11 58.12-58.11s58.11 26.02 58.11 58.12c0 32.1-26.02 58.11-58.11 58.11z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 512 512" {nodes} {...props} />
