<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M10.65 1h-0.77c-0.23-0.59-0.77-1-1.39-1h-2.47c-0.29 0-0.53 0.09-0.71 0.27-0.32 0.32-0.31 0.77-0.31 1.25v11.78l1.85 2.33h0.15v1.38l1-0.69v-0.69h0.15l1.85-2.33v-11.3h0.65c0.34 0 0.35 0.54 0.35 0.65v4.27h1v-4.27c0-0.97-0.56-1.65-1.35-1.65zM6.02 1h2.47c0.28 0 0.52 0.29 0.52 0.65v3.35h-3v-3.48c0-0.190-0.49 0.02-0.52zM7.67 14.63h-0.33l-1.33-1.670-6.95h3v6.95l-1.33 1.68z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 17 17" {nodes} {...props} />
