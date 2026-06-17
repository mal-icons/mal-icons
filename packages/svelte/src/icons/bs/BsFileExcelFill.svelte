<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2M5.88 4.68 8 7.22l2.12-2.54a0.50.5 0 1 1 0.770.64L8.65 8l2.23 2.68a0.50.5 0 0 1-0.770.64L8 8.78l-2.12 2.54a0.50.5 0 0 1-0.77-0.64L7.35 8 5.12 5.32a0.50.5 0 1 1 0.77-0.64"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 16 16" {nodes} {...props} />
