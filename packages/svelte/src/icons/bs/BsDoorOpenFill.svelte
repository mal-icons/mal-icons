<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M1.5 15a0.50.5 0 0 0 0 1h13a0.50.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V0.5a0.50.5 0 0 0-0.57-0.49l-7 1A0.50.5 0 0 0 3 1.5V15zM11 2h0.5a0.50.5 0 0 1 0.50.5V15h-1zm-2.5 8c-0.28 0-0.5-0.45-0.5-1s0.22-1 0.5-1 0.50.450.5 1-0.22 1-0.5 1"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
