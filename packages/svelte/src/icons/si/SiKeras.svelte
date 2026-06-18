<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M24 0H0v24h24V0zM8.45 5.16l0.20.17v6.24l6.46-6.45h1.96l0.20.4-5.14 5.1 5.47 7.94-0.20.3h-1.94l-4.65-6.88-2.16 2.08v4.6l-0.190.2H7l-0.2-0.2V5.33l0.17-0.17h1.48z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
