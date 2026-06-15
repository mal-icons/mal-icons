<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M2 8C2 6.34 3.34 5 5 5H19C20.66 5 22 6.34 22 8V16C22 17.66 20.66 19 19 19H5C3.34 19 2 17.66 2 16V8ZM5 7H19C19.55 7 20 7.45 20 8V11H4V8C4 7.45 4.45 7 5 7ZM4 13V16C4 16.55 4.45 17 5 17H8V13H4ZM10 17H19C19.55 17 20 16.55 20 16V13H10V17Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
