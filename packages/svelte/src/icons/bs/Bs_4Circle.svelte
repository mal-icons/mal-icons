<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M7.52 5.06q0.33-0.530.66-1.05h1.93v5.33h1.01v1.11H10.11V12H8.85v-1.56H4.98V9.32c0.77-1.43 1.66-2.85 2.54-4.26ZM6.23 9.28v0.05H8.85V5.06h-0.06c-0.87 1.33-1.79 2.81-2.56 4.22"}],["path",{"d":"M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
