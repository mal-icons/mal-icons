<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8.32 3.68L0 12l8.32 8.32L16.65 12zm7.370.01l-1.85 1.85 6.49 6.46-6.49 6.49 1.85 1.82L24 11.99Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
