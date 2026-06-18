<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m12 0-10.4 6v12l10.39 6 10.4-6V6L12 0zm4.64 13.2-2.77 1.6-3.35-1.83v3.83l-3.14 2V10.8L9.88 9.27l3.46 1.82V7.19l3.3-1.98v8z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
