<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8 14.31v7.38L12 24V12L1.61 6v4.62ZM12 0 2.82 5.3 6.82 7.61l5.18-2.99 6.39 3.69v7.38l-5.18 2.99v4.62l9.18-5.3V6Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
