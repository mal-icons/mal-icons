<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15 2.75a0.750.75 0 0 1-0.750.75h-4a0.750.75 0 0 1 0-1.5h4a0.750.75 0 0 1 0.750.75Zm-8.50.75v1.25a0.750.75 0 0 0 1.5 0v-4a0.750.75 0 0 0-1.5 0V2H1.75a0.750.75 0 0 0 0 1.5H6.5Zm1.25 5.25a0.750.75 0 0 0 0-1.5h-6a0.750.75 0 0 0 0 1.5h6ZM15 8a0.750.75 0 0 1-0.750.75H11.5V10a0.750.75 0 1 1-1.5 0V6a0.750.75 0 0 1 1.5 0v1.25h2.75A0.750.75 0 0 1 15 8Zm-9 5.25v-2a0.750.75 0 0 0-1.5 0v1.25H1.75a0.750.75 0 0 0 0 1.5H4.5v1.25a0.750.75 0 0 0 1.5 0v-2Zm9 0a0.750.75 0 0 1-0.750.75h-6a0.750.75 0 0 1 0-1.5h6a0.750.75 0 0 1 0.750.75Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
