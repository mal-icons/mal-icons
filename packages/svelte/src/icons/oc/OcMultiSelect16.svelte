<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5.75 7.5h7.5a0.750.75 0 0 1 0 1.5h-7.5a0.750.75 0 0 1 0-1.5Zm0 5h7.5a0.750.75 0 0 1 0 1.5h-7.5a0.750.75 0 0 1 0-1.5Zm-4-10h6.5a0.750.75 0 0 1 0 1.5h-6.5a0.750.75 0 0 1 0-1.5ZM2 14a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm10.31-3.08L11.07 2.42A0.250.25 0 0 1 11.26 2h4.49a0.250.25 0 0 1 0.190.42l-2.24 2.5a0.250.25 0 0 1-0.37 0Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
