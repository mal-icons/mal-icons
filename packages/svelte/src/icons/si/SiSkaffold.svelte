<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6.6 20.1H24v3.84H6.6v-3.84zm-2.77-6.69h13.56v3.84H0V6.71h3.84v6.69zm13.56-9.5H0V0.07h17.4v3.84zm2.77 6.69H6.6V6.76H24v10.53h-3.84v-6.69z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
