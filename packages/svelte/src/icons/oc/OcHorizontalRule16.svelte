<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M0 7.75A0.750.75 0 0 1 0.75 7h14.5a0.750.75 0 0 1 0 1.5H0.75A0.750.75 0 0 1 0 7.75Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
