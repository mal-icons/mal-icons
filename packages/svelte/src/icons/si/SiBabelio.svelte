<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15.28 0a13.99 13.99 0 0 1-6.57 7.59v4.69a20.54 20.54 0 0 0 6.57-3.68zm3.28 7.7a22.12 22.12 0 0 1-13.13 7.03v4.21a35.55 35.55 0 0 0 3.84-0.56 35.12 35.12 0 0 0 9.3-3.32zm3.28 7.33a36.75 36.75 0 0 1-19.7 5.69V24h19.7Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
