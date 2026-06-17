<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M2.76 3.06a0.50.5 0 0 1 0.680.2l1.28 2.35A8.9 8.9 0 0 1 8 5a8.9 8.9 0 0 1 3.280.61l1.28-2.35a0.50.5 0 1 1 0.880.48l-1.25 2.3C14.48 7.27 16 9.48 16 12H0c0-2.52 1.53-4.73 3.81-5.97L2.56 3.74a0.50.5 0 0 1 0.2-0.68ZM5 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2m6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
