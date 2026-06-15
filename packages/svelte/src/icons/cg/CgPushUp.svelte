<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M11 22.29H13V7.8L16.24 11.05L17.66 9.63L12 3.97L6.34 9.63L7.76 11.05L11 7.8V22.29ZM18 3H6V1H18V3Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
