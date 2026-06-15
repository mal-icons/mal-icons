<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17 7.53c0-0.83-0.67-1.5-1.5-1.5h-4.81l0.28-0.91 0.02-3.62c0-0.83-0.67-1.5-1.5-1.5h-2c-0.83 0-1.5 0.67-1.5 1.5v3.45l0.31 1.08h-4.81c-0.83 0-1.5 0.67-1.5 1.5v3.49h0.93l-0.77 5.98h16.67l-0.77-5.98h0.93v-3.49zM15.7 16h-1.7v-2h-1v2h-1v-3h-1v3h-1v-4h-1v4h-5v-2h-1v2h-1.7l0.64-4.98h13.12l0.64 4.98zM1.06 10.02h-0.06v-2.49c0-0.28 0.22-0.5 0.5-0.5h6.17l-0.66-2.15v-3.38c0-0.28 0.22-0.5 0.5-0.5h2c0.28 0 0.5 0.22 0.5 0.5v3.39l-0.67 2.14h6.17c0.28 0 0.5 0.22 0.5 0.5v2.49h-14.94zM8 2h1v1h-1v-1z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 17 17" {nodes} {...props} />
