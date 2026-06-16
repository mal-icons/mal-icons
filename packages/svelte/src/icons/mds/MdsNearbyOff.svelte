<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M22.82 12.01 18.83 16l-1.81-1.81L19.2 12 12 4.8 9.81 6.99 8 5.17l3.99-3.99 10.83 10.83zm-1.63 9.18-1.41 1.41L16 18.83l-3.99 3.99L1.18 11.99 5.17 8 1.39 4.22 2.8 2.81l18.39 18.38zm-7-4.17-1.39-1.39-0.80.8L7.58 12l0.8-0.8-1.4-1.39L4.8 12l7.2 7.2 2.19-2.18zM16.42 12 12 7.58l-0.80.8 4.42 4.420.8-0.8z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
