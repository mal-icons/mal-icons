<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M3.59 5.93c-0.96 0-1.55 0.5-1.55 1.31v2.16c0 0.42 0.16 0.8 0.45 1.1 0.29 0.29 0.68 0.46 1.1 0.46h1.74l5.69 5.69v-16.43l-5.63 5.72h-1.8zM10.02 2.65v11.57l-4.27-4.27h-2.16c-0.3 0-0.55-0.25-0.55-0.55v-2.16c0-0.09 0-0.31 0.55-0.31h2.22l4.21-4.28zM12.01 10.99v-1c0.56 0 1.01-0.45 1.01-1.01s-0.45-1.01-1.01-1.01v-1c1.11 0 2.01 0.9 2.01 2.01s-0.9 2.01-2.01 2.01zM16.03 8.99c0 2.21-1.79 4-4 4v-1c1.65 0 3-1.35 3-3s-1.35-3-3-3v-1c2.21 0 4 1.8 4 4z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 17 17" {nodes} {...props} />
