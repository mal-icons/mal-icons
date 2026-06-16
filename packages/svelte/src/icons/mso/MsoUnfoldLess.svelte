<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m343-160-43-43 180-180 180 180-43 43-137-137-137 137Zm137-417L300-757l43-43 137 137 137-137 43 43-180 180Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
