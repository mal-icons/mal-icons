<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 0 1.61 6v12L12 24l10.39-6V6L19.14 4.12 16.01 5.93l3.25 1.88v8.38L12 20.39l-7.26-4.19V7.81l10.39-6zm0 8.24-3.25 1.88v3.75h0v0L12 15.76l3.25-1.88v-3.76z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
