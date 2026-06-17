<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","d":"M9 2.5a0.50.5 0 0 1 0.5-0.5h3a0.50.5 0 0 1 0 1h-0.39l1.4 7a2.5 2.5 0 1 1-0.980.2l-0.19-0.94-2.43 3.53A0.50.5 0 0 1 9.5 13H4.95a2.5 2.5 0 1 1 0-1h4.29l2.83-4.11L11.09 3H9.5a0.50.5 0 0 1-0.5-0.5M3.92 12a1.5 1.5 0 1 0 0 1H2.5a0.50.5 0 0 1 0-1zm8.82-0.79A1.5 1.5 0 0 0 13.5 14a1.5 1.5 0 0 0 0.21-2.98l0.28 1.39a0.50.5 0 0 1-0.980.2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
