<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m358-160-250 52 52-250 198 198Zm0 0L160-358l515-515 198 198-515 515Zm-12-73 442-442-113-113-442 442 113 113Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
