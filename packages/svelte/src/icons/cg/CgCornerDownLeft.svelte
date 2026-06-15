<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17.15 13.4C18.25 13.4 19.15 12.51 19.15 11.4V3.4H21.15V11.4C21.15 13.61 19.36 15.4 17.15 15.4H6.84L10.63 19.19L9.21 20.6L2.85 14.24L9.21 7.87L10.63 9.29L6.51 13.4H17.15Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
