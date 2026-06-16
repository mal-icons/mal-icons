<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16 8h4v2h-4zm0 4h4v2h-4z","opacity":".3"}],["path",{"d":"M2 6v12h2V8h10v10h2v-2h4v2h2V6H2zm18 8h-4v-2h4v2zm0-4h-4V8h4v2z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
