<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15.94 2.5L21.5 8.07V15.94L15.94 21.5H8.07L2.5 15.94V8.07L8.07 2.5H15.94ZM8 11V13H16V11H8Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
