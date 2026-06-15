<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M8 11C10.21 11 12 9.21 12 7C12 4.79 10.21 3 8 3C5.79 3 4 4.79 4 7C4 9.21 5.79 11 8 11ZM8 9C9.1 9 10 8.1 10 7C10 5.9 9.1 5 8 5C6.9 5 6 5.9 6 7C6 8.1 6.9 9 8 9Z","fill":"currentColor"}],["path",{"d":"M11 14C11.55 14 12 14.45 12 15V21H14V15C14 13.34 12.66 12 11 12H5C3.34 12 2 13.34 2 15V21H4V15C4 14.45 4.45 14 5 14H11Z","fill":"currentColor"}],["path",{"d":"M22 9H16V11H22V9Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
