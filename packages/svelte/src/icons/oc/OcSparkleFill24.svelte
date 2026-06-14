<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11.3 1.92c0.24-0.66 1.17-0.66 1.41 0l0.72 1.96a11.25 11.25 0 0 0 6.7 6.7l1.960.72c0.660.240.66 1.17 0 1.41l-1.960.72a11.25 11.25 0 0 0-6.7 6.7l-0.72 1.96c-0.240.66-1.170.66-1.41 0l-0.72-1.96a11.25 11.25 0 0 0-6.7-6.7l-1.96-0.72c-0.66-0.24-0.66-1.17 0-1.41l1.96-0.72a11.25 11.25 0 0 0 6.7-6.7l0.72-1.96Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
