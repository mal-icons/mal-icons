<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M17 10C17 12.42 15.28 14.44 13 14.9V17H15V19H9V17H11V14.9C8.72 14.44 7 12.42 7 10V5H17V10ZM15 7H9V10C9 11.66 10.34 13 12 13C13.66 13 15 11.66 15 10V7Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
