<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M5 3V19H21V21H3V3H5ZM20.29 6.29L21.71 7.71L16 13.41L13 10.42L8.71 14.71L7.29 13.29L13 7.59L16 10.59L20.29 6.29Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
