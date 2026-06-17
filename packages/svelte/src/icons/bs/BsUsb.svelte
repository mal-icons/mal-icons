<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M2.25 7a0.250.25 0 0 0-0.250.25v1c0 0.140.110.250.250.25h11.5a0.250.25 0 0 0 0.25-0.25v-1a0.250.25 0 0 0-0.25-0.25z"}],["path",{"d":"M0 5.5A0.50.5 0 0 1 0.5 5h15a0.50.5 0 0 1 0.50.5v5a0.50.5 0 0 1-0.50.5H0.5a0.50.5 0 0 1-0.5-0.5zM1 10h14V6H1z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
