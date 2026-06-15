<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M2 2C2 0.9 2.9 0 4 0H17C17.27 0 17.52 0.11 17.71 0.29L21.71 4.29C21.89 4.48 22 4.73 22 5V22C22 23.1 21.1 24 20 24H4C2.9 24 2 23.1 2 22V2ZM16.59 2L4 2V22H20V5.41L16.59 2ZM5 7V3H7V7H5ZM8 3V7H10V3H8ZM11 7V3H13V7H11ZM14 5V7H16V5H14Z","fill":"currentColor"}]];
  const defaultAttr = {"fill":"none"};
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {defaultAttr} {...props} />
