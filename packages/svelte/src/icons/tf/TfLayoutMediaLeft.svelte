<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10 4h5.83v1h-5.83v-1z","fill":"currentColor"}],["path",{"d":"M10 8h3.5v1h-3.5v-1z","fill":"currentColor"}],["path",{"d":"M10.01 6h6.99v1h-6.99v-1z","fill":"currentColor"}],["path",{"d":"M10 9.99h6.99v1h-6.99v-1z","fill":"currentColor"}],["path",{"d":"M10 12h5.83v1h-5.83v-1z","fill":"currentColor"}],["path",{"d":"M0 13h9v-9h-9v9zM1 5h7v7h-7v-7z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 17 17" {nodes} {...props} />
