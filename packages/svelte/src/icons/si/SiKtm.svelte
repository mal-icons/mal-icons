<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M0 15.74h3.35l0.84-2.06 1.55 2.06h7.23l2.23-2.08-0.37 2.08h2.83L20 13.68l-0.32 2.06h3.05L24 9.99h-3.07l-2.49 2.190.48-2.19h-2.94l-3.21 3.22 1.34-3.94h4.91l0.23-1H6.38l-0.38 1h4.73l-1.99 5.05-1.57-2.07L9.89 9.99H7.61l-2.79 2.230.94-2.23H2.44L0 15.74Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
