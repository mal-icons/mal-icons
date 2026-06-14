<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11.910.42a1.5 1.5 0 0 1 2.140.49l1.69 2.93a1.5 1.5 0 0 1-0.65 2.1L2.9 11.82a1.5 1.5 0 0 1-1.95-0.6l-0.68-1.18a1.5 1.5 0 0 1 0.46-1.99L11.910.42Zm-3.37 9.79a0.750.75 0 0 1 0.940.25l2.64 3.86a0.750.75 0 0 1-1.240.85L9 12.42v2.83a0.750.75 0 0 1-1.5 0v-2.83l-1.88 2.75a0.750.75 0 1 1-1.24-0.85l2.05-2.99a0.750.75 0 0 1 0.29-0.25l1.81-0.87Zm2.48-3.96v0l1.36-0.65-1.52-2.63-1.240.85ZM3.28 8.12l0.84 1.45 1.36-0.65-0.95-1.64Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
