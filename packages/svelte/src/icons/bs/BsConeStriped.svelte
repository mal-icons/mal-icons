<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m9.97 4.880.95 3.81C10.16 8.88 9.14 9 8 9s-2.16-0.12-2.92-0.31L6.03 4.88C6.64 4.96 7.3 5 8 5s1.37-0.04 1.97-0.12m-0.24-0.98L8.970.88C8.72-0.13 7.28-0.13 7.030.88L6.28 3.9C6.8 3.97 7.38 4 8 4s1.2-0.04 1.73-0.1m4.4 8.61a0.50.5 0 0 1 0.040.96l-6 2a0.50.5 0 0 1-0.32 0l-6-2a0.50.5 0 0 1 0.04-0.96l2.39-0.60.56-2.26c0.860.21 1.960.34 3.170.34s2.3-0.13 3.17-0.34l0.56 2.26z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
