<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 4.82L1.58 0v19.18L12 24l10.42-4.82V0zm6.17 11.63l-6.14 2.84-6.14-2.84V6.69l6.14 2.84 6.14-2.84z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
