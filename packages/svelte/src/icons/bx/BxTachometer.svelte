<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 4C6.49 4 2 8.49 2 14a9.89 9.89 0 0 0 1.05 4.45c0.170.340.520.560.90.56h16.11c0.38 0 0.73-0.210.9-0.56A9.89 9.89 0 0 0 22 14c0-5.51-4.49-10-10-10zm7.41 13H4.59A7.88 7.88 0 0 1 4 14c0-4.41 3.59-8 8-8s8 3.59 8 8a7.88 7.88 0 0 1-0.59 3z"}],["path",{"d":"M10.94 12.94a1.53 1.53 0 0 0 0 2.56 1.53 1.53 0 0 0 2.12-0.44l3.96-6.04a0.030.03 0 0 0 0-0.040.030.03 0 0 0-0.04-0.01l-6.04 3.96z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
