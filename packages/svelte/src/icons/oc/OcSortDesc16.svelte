<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M0 4.25a0.750.75 0 0 1 0.75-0.75h7.5a0.750.75 0 0 1 0 1.5H0.75A0.750.75 0 0 1 0 4.25Zm0 4a0.750.75 0 0 1 0.75-0.75h4.5a0.750.75 0 0 1 0 1.5H0.75A0.750.75 0 0 1 0 8.25Zm0 4a0.750.75 0 0 1 0.75-0.75h2.5a0.750.75 0 0 1 0 1.5H0.75a0.750.75 0 0 1-0.75-0.75ZM13.5 10h2.25a0.250.25 0 0 1 0.180.43l-3 3a0.250.25 0 0 1-0.35 0l-3-3A0.250.25 0 0 1 9.75 10H12V3.75a0.750.75 0 0 1 1.5 0V10Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
