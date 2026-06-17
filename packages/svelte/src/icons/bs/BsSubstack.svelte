<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15 3.6H1v1.89h14v-1.89ZM1 7.21V16l7-3.93L15 16V7.21zM15 0H1v1.89h14z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
