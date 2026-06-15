<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M2 14h13v-11h-13v11zM3 4h11v9h-11v-9z","fill":"currentColor"}],["path",{"d":"M16 4.53h1v7.94h-1v-7.94z","fill":"currentColor"}],["path",{"d":"M0 4.53h1v7.94h-1v-7.94z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 17 17" {nodes} {...props} />
