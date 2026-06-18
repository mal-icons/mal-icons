<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19 10.13v-6c0-1.1-0.9-2-2-2H7c-1.1 0-2 0.9-2 2V22l7-4.67L19 22V10.13z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
