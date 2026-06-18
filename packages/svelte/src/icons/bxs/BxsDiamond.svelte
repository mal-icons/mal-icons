<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16.45 3h-8.89c-0.34 0-0.670.18-0.850.47L3.25 9h17.5l-3.46-5.53a1 1 0 0 0-0.85-0.47zM11.26 21.19a1 1 0 0 0 1.48 0L22 11H2l9.26 10.19z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
