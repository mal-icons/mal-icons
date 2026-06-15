<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M1 3.25C1 3.11 1.11 3 1.25 3H13.75C13.89 3 14 3.11 14 3.25V10.75C14 10.89 13.89 11 13.75 11H1.25C1.11 11 1 10.89 1 10.75V3.25ZM1.25 2C0.56 2 0 2.56 0 3.25V10.75C0 11.44 0.56 12 1.25 12H5.07L4.83 13.3C4.77 13.64 5.03 13.95 5.37 13.95H9.63C9.97 13.95 10.23 13.64 10.17 13.3L9.93 12H13.75C14.44 12 15 11.44 15 10.75V3.25C15 2.56 14.44 2 13.75 2H1.25ZM9.01 12H5.99L5.79 13.05H9.21L9.01 12Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 15 15" {nodes} {...props} />
