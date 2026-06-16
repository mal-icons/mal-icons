<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M19.57 3.95c-1.92-1.29-4.08-1.17-5.8-0.26L12 9h1.66c0.67 0 1.150.650.96 1.29l-1.82 6.07c-0.090.29-0.520.2-0.49-0.1L13 10h-1.67c-0.66 0-1.14-0.64-0.96-1.27l1.18-4.11c-1.85-1.73-4.84-2.3-7.28-0.58C2.82 5.07 2 6.7 2 8.49c-0.01 3.81 3.53 6.71 8.66 11.30.760.68 1.920.69 2.690.01 4.98-4.42 8.87-7.58 8.64-11.62-0.09-1.73-0.99-3.26-2.42-4.23z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
