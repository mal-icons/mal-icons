<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 0C5.37 0 0 5.37 0 12c0 6.63 5.37 12 12 12 6.63 0 12-5.37 12-12 0-6.63-5.37-12-12-12zm0 2.05c5.5 0 9.96 4.46 9.96 9.96 0 0.84-0.12 1.66-0.31 2.44l-4.74-5.26-6.05 6.89 2.92-5.84-1.46-2.61-8.6 9.89A9.91 9.91 0 0 1 2.05 12c0-5.5 4.46-9.95 9.96-9.95z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
