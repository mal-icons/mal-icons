<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5 3.75C5 2.78 5.78 2 6.75 2h10.5c0.97 0 1.750.78 1.75 1.75v17.5a0.750.75 0 0 1-1.220.59L12 17.21l-5.78 4.63A0.750.75 0 0 1 5 21.25Zm1.75-0.25a0.250.25 0 0 0-0.250.25v15.94l5.03-4.03a0.750.75 0 0 1 0.94 0L17.5 19.69V3.75a0.250.25 0 0 0-0.25-0.25Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
