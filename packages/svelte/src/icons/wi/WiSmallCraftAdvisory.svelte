<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9.81,24.6V7.45h1.03V24.6H9.81z M11.54,14.86V7.45l8.65,3.69L11.54,14.86z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 30 30" {nodes} {...props} />
