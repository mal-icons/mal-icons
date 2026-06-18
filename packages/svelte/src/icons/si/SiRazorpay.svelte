<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M22.44 0l-11.91 7.77-1.17 4.28 6.63-4.3L11.65 24h4.39l6.4-24zM14.26 10.1L3.39 17.17 1.56 24h9.01l3.69-13.9Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
