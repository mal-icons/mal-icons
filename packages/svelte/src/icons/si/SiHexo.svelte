<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12.02 0L1.6 6.02l-0.02 12L11.98 24l10.43-6.020.02-12zm4.83 17.14l-0.960.56-0.97-0.57V12.99H9.08v4.15l-0.960.56-0.97-0.57V6.85l0.96-0.550.970.56v4.14h5.84V6.86l0.97-0.550.960.56z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
