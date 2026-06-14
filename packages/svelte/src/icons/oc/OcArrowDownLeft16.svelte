<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11.78 4.22a0.750.75 0 0 1 0 1.06l-5.26 5.26h4.2a0.750.75 0 0 1 0 1.5H4.71a0.750.75 0 0 1-0.75-0.75V5.28a0.750.75 0 0 1 1.5 0v4.2l5.26-5.26a0.750.75 0 0 1 1.06 0Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
