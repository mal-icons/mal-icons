<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M0 10.2A1.8 1.8 0 1.8 12h1.8a8.4 8.4 0 18.4 8.4v1.8a1.8 1.8 0 1.8 1.8h8.4a1.8 1.8 0 1.8-1.8v-1.8C24 9.13 14.87 0 3.6 0H1.8A1.8 1.8 0 0 1.8v8.4z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
