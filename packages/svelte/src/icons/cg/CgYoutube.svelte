<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M5 7H19C19.55 7 20 7.45 20 8V16C20 16.55 19.55 17 19 17H5C4.45 17 4 16.55 4 16V8C4 7.45 4.45 7 5 7ZM2 8C2 6.34 3.34 5 5 5H19C20.66 5 22 6.34 22 8V16C22 17.66 20.66 19 19 19H5C3.34 19 2 17.66 2 16V8ZM10 9L14 12L10 15V9Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
