<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M4.93 5.43C4.76 5.61 4.76 5.89 4.93 6.07C5.11 6.24 5.39 6.24 5.57 6.07L7.5 4.14L9.43 6.07C9.61 6.24 9.89 6.24 10.07 6.07C10.24 5.89 10.24 5.61 10.07 5.43L7.82 3.18C7.73 3.1 7.62 3.05 7.5 3.05C7.38 3.05 7.27 3.1 7.18 3.18L4.93 5.43ZM10.07 9.57C10.24 9.39 10.24 9.11 10.07 8.93C9.89 8.76 9.61 8.76 9.43 8.93L7.5 10.86L5.57 8.93C5.39 8.76 5.11 8.76 4.93 8.93C4.76 9.11 4.76 9.39 4.93 9.57L7.18 11.82C7.36 11.99 7.64 11.99 7.82 11.82L10.07 9.57Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 15 15" {nodes} {...props} />
