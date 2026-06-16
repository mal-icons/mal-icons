<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15.5 22c1.05 0 2.05-0.16 3-0.46-4.06-1.27-7-5.06-7-9.54s2.94-8.27 7-9.54c-0.95-0.3-1.95-0.46-3-0.46-5.52 0-10 4.48-10 10s4.48 10 10 10z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
