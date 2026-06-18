<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M13.39 0C8.68 0 4.61 2.72 2.64 6.67h15.64a4.77 4.77 0 0 0 3.07-1.11c0.45-0.370.86-0.78 1.25-1.24l00A11.97 11.97 0 0 0 13.39 0zM1.8 8.89a12.01 12.01 0 0 0 0 6.22h14.7a3.11 3.11 0 1 0 0-6.22zm0.84 8.44C4.61 21.28 8.68 24 13.4 24c3.7 0 7.01-1.68 9.21-4.31l00a9.96 9.96 0 0 0-1.25-1.24 4.77 4.77 0 0 0-3.07-1.11z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
