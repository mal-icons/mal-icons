<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15.94 2.5L21.5 8.07V15.94L15.94 21.5H8.07L2.5 15.94V8.07L8.07 2.5H15.94ZM15.11 4.5H8.89L4.5 8.89V15.11L8.89 19.5H15.11L19.5 15.11V8.89L15.11 4.5Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
