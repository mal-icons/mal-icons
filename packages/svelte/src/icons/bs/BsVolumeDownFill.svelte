<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9 4a0.50.5 0 0 0-0.81-0.39L5.83 5.5H3.5A0.50.5 0 0 0 3 6v4a0.50.5 0 0 0 0.50.5h2.33l2.36 1.89A0.50.5 0 0 0 9 12zm3.03 4a4.5 4.5 0 0 1-1.32 3.18L10 10.48A3.5 3.5 0 0 0 11.03 8 3.5 3.5 0 0 0 10 5.53l0.71-0.71A4.5 4.5 0 0 1 12.03 8"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
