<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12.99 6.75v-2.25c0-0.83-0.68-1.5-1.51-1.5h-7.48v-0.5c0-0.28 0.23-0.5 0.5-0.5h5.54v-1h-5.54c-0.83 0-1.5 0.67-1.5 1.5v0.5h-1.49c-0.83 0-1.51 0.67-1.51 1.5v2c0 0.83 0.68 1.5 1.51 1.5h0.5v5.5c0 0.83 0.67 1.5 1.5 1.5h7.96c0.83 0 1.51-0.67 1.51-1.5v-2.25l4.01 2.78v-10.06l-4.01 2.78zM16 12.12l-4.01-2.78v4.16c0 0.28-0.23 0.5-0.51 0.5h-7.96c-0.28 0-0.5-0.22-0.5-0.5v-6.5h-1.5c-0.28 0-0.51-0.22-0.51-0.5v-2c0-0.28 0.23-0.5 0.51-0.5h9.97c0.28 0 0.51 0.22 0.51 0.5v4.16l4.01-2.78v6.24z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 17 17" {nodes} {...props} />
