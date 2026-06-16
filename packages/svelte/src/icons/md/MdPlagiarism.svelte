<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M14 2H6c-1.1 0-2 0.9-2 2v16c0 1.10.89 2 1.99 2H18c1.1 0 2-0.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"}],["path",{"d":"M9.03 11.03a3.5 3.5 0 0 0 0 4.95 3.48 3.48 0 0 0 4.130.59l1.88 1.88 1.41-1.41-1.88-1.88c0.71-1.330.53-3.01-0.59-4.13a3.5 3.5 0 0 0-4.95 0zm3.53 3.53c-0.590.59-1.540.59-2.12 0a1.49 1.49 0 0 1 0-2.12 1.49 1.49 0 0 1 2.12 0c0.590.590.59 1.53 0 2.12z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
