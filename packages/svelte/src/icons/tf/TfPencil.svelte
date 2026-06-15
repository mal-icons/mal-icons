<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15.53 2.86l-1.4-1.4c-0.56-0.57-1.55-0.57-2.12 0l-9.06 9.06-1.72 5.29 5.25-1.76 9.06-9.06c0.59-0.58 0.59-1.54 0-2.12zM3.09 13.29l0.65-1.98 1.93 1.94-1.96 0.66-0.62-0.62zM4.36 10.52l5.49-5.49 2.11 2.11-5.49 5.49-2.11-2.11zM10.56 4.32l0.73-0.73 2.11 2.11-0.73 0.73-2.11-2.11zM14.82 4.27l-0.72 0.72-2.11-2.11 0.72-0.72c0.19-0.19 0.52-0.19 0.71 0l1.4 1.4c0.2 0.2 0.2 0.51 0 0.71z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 17 17" {nodes} {...props} />
