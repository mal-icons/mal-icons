<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M6.5 10C8.43 10 10 8.43 10 6.5C10 4.57 8.43 3 6.5 3C4.57 3 3 4.57 3 6.5C3 8.43 4.57 10 6.5 10ZM6.5 11C7.56 11 8.54 10.63 9.31 10.02L12.15 12.85C12.34 13.05 12.66 13.05 12.85 12.85C13.05 12.66 13.05 12.34 12.85 12.15L10.02 9.31C10.63 8.54 11 7.56 11 6.5C11 4.01 8.99 2 6.5 2C4.01 2 2 4.01 2 6.5C2 8.99 4.01 11 6.5 11ZM4.75 6C4.47 6 4.25 6.22 4.25 6.5C4.25 6.78 4.47 7 4.75 7H8.25C8.53 7 8.75 6.78 8.75 6.5C8.75 6.22 8.53 6 8.25 6H4.75Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 15 15" {nodes} {...props} />
