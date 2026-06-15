<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3 3v11h11v-11h-11zM13 13h-9v-9h9v9z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 17 17" {nodes} {...props} />
