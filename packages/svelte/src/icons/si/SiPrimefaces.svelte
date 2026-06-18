<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6.43 0 3.88 2.56l3.830.37L8.99 0Zm3.1 0L8.08 3.47 1.5 2.93l1.09 4.58 7.85 2.93h1.1V0Zm2.74 0v10.44h1.28l7.85-2.93 1.1-4.58-6.760.55L14.28 0Zm2.56 0 1.28 2.93 3.83-0.37L17.39 0ZM2.78 8.24v6.23l4.38 3.66v-5.68l1.28-1.83-1.640.37-2.01-2.02zm18.26 0-2.010.73-2.01 2.02-1.64-0.37 1.28 1.83v5.68l4.38-3.66zM9.17 10.63l-1.46 2.2v8.24l1.1 1.65L10.08 24h3.65l1.28-1.28 1.1-1.65v-8.24l-1.46-2.2-0.910.55h-3.65zm-4.38 6.23v2.38l2.37 2.38V18.87zm14.24 0-2.37 2.02v2.75l2.37-2.38z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
