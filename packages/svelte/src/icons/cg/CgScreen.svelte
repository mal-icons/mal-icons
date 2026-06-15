<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M11 17H4C2.34 17 1 15.66 1 14V6C1 4.34 2.34 3 4 3H20C21.66 3 23 4.34 23 6V14C23 15.66 21.66 17 20 17H13V19H16C16.55 19 17 19.45 17 20C17 20.55 16.55 21 16 21H8C7.45 21 7 20.55 7 20C7 19.45 7.45 19 8 19H11V17ZM4 5H20C20.55 5 21 5.45 21 6V14C21 14.55 20.55 15 20 15H4C3.45 15 3 14.55 3 14V6C3 5.45 3.45 5 4 5Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
