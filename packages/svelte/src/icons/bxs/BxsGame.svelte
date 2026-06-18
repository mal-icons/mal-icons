<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 22c3.72 0 7.06-2.03 8.81-5.31L13 12l7.81-4.69C19.06 4.04 15.72 2 12 2 6.49 2 2 6.49 2 12s4.49 10 10 10zm-0.5-16a1.5 1.5 0 1 10 3A1.5 1.5 0 0 1 11.5 6z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
