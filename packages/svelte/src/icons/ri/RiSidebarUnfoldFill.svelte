<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M13 3H4C3.45 3 3 3.45 3 4V20C3 20.55 3.45 21 4 21H13V3ZM15 21V3H20C20.55 3 21 3.45 21 4V20C21 20.55 20.55 21 20 21H15ZM7 8.5L11 12L7 15.5V8.5Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
