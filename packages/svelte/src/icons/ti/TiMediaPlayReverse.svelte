<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M14 19c1.1 0 2-0.9 2-2v-10c0-1.1-0.9-2-2-2-0.5 0-1 0.2-1.40.6-2.6 2.5-6.6 6.4-6.6 6.4s4 3.9 6.6 6.4c0.40.40.90.6 1.40.6z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
