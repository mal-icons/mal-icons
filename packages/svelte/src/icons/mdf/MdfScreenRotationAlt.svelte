<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m4 7.59 5-5c0.78-0.78 2.05-0.78 2.83 0L20.24 11h-2.83L10.4 4 5.41 9H8v2H2V5h2v2.59zM20 19h2v-6h-6v2h2.59l-4.99 5-7.01-7H3.76l8.41 8.41c0.780.78 2.050.78 2.83 0l5-5V19z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
