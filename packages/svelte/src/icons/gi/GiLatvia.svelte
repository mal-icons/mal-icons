<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M23.45 354.58c-8.66-40.15-4.72-98.13 46.13-175.92l53.15-21.39 60.92 88.15 57.04-23.33-3.89-79.72 62.27-28.86 71.25 65.16 29.18-13.02 63.86 34.83 28.82 122.08c-18.16 31.71-30.85 65.51-104.49 75.97l-113.93-84.4c-97.46 20.25-135.15 4.19-184.72-5.18z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 512 512" {nodes} {...props} />
