<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4.53 4.75A0.750.75 0 0 1 5.28 4h6.01a0.750.75 0 0 1 0.750.75v6.01a0.750.75 0 0 1-1.5 0v-4.2l-5.26 5.26a0.750.75 0 0 1-1.27-0.330.750.75 0 0 1 0.22-0.73L9.48 5.5h-4.2a0.750.75 0 0 1-0.75-0.75Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
