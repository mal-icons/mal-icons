<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11 18.79V20H9v2h6v-2h-2v-1.84a9.93 9.93 0 0 0 3.07-2.08c3.9-3.9 3.9-10.24 0-14.14l-1.41 1.41c3.12 3.12 3.12 8.2 0 11.31-3.12 3.12-8.19 3.12-11.31 0L1.93 16.07A9.97 9.97 0 0 0 9 18.99a9.98 9.98 0 0 0 2-0.2z"}],["path",{"d":"M3 9c0 3.31 2.69 6 6 6s6-2.69 6-6-2.69-6-6-6-6 2.69-6 6zm10 0c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
