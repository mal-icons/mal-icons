<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9.2 21.5H13.2V13.49H16.8L17.2 9.51H13.2V7.5C13.2 6.95 13.65 6.5 14.2 6.5H17.2V2.5H14.2C11.44 2.5 9.2 4.74 9.2 7.5V9.51H7.2L6.8 13.49H9.2V21.5Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
