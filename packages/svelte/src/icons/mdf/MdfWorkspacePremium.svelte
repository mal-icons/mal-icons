<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9.68 13.69 12 11.93l2.31 1.76-0.88-2.85L15.75 9h-2.84L12 6.19 11.09 9H8.25l2.31 1.84-0.88 2.85zM20 10c0-4.42-3.58-8-8-8s-8 3.58-8 8c0 2.030.76 3.87 2 5.28V23l6-2 6 2v-7.72A7.96 7.96 0 0 0 20 10zm-8-6c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
