<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M20.71 7.17c-2.45-0.03-6.33 1.75-8.68 2.96-3.43-1.75-10.18-4.73-10.94-1.54-1.03 4.3-2.19 7.560.99 8.17 2.210.42 7.12-2.43 9.91-4.2 2.78 1.77 7.75 4.66 9.96 4.23 3.17-0.62 2-3.90.96-8.21-0.24-1-1.07-1.39-2.19-1.41z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
