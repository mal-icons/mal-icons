<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M14 2c1.82 0 3.530.5 5 1.35-2.99 1.73-5 4.95-5 8.65s2.01 6.92 5 8.65A9.97 9.97 0 0 1 14 22C8.48 22 4 17.52 4 12S8.48 2 14 2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
