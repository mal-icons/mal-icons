<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11.11 0 5.06 10.47l4.8 6.14 1.32-2.29-3.15-4.03 4.72-8.18A902.35 902.35 0 0 0 11.11 0Zm3.03 7.39L12.82 9.68l3.15 4.03-4.72 8.18c0.550.7 1.1 1.4 1.65 2.1l6.05-10.47-4.8-6.14Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
