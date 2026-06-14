<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a0.750.75 0 0 1 0.750.75v7.5a0.750.75 0 0 1-1.5 0V1.5h-8a1 1 0 0 0-1 1v6.71A2.49 2.49 0 0 1 4.5 9h3.75a0.750.75 0 0 1 0 1.5H4.5a1 1 0 1 0 0 2h3.75a0.750.75 0 0 1 0 1.5H4.5A2.5 2.5 0 0 1 2 11.5v-9Z"}],["path",{"d":"M11.28 10.22a0.750.75 0 1 0-1.06 1.06L11.94 13l-1.72 1.72a0.750.75 0 1 0 1.06 1.06L13 14.06l1.72 1.72a0.750.75 0 1 0 1.06-1.06L14.06 13l1.72-1.72a0.750.75 0 1 0-1.06-1.06L13 11.94l-1.72-1.72Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
