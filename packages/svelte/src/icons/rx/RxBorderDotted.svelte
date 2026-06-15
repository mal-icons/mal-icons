<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M1.5 6.63C1.02 6.63 0.63 7.02 0.63 7.5C0.63 7.98 1.02 8.38 1.5 8.38C1.98 8.38 2.38 7.98 2.38 7.5C2.38 7.02 1.98 6.63 1.5 6.63ZM5.5 6.63C5.02 6.63 4.63 7.02 4.63 7.5C4.63 7.98 5.02 8.38 5.5 8.38C5.98 8.38 6.38 7.98 6.38 7.5C6.38 7.02 5.98 6.63 5.5 6.63ZM9.5 6.63C9.02 6.63 8.63 7.02 8.63 7.5C8.63 7.98 9.02 8.38 9.5 8.38C9.98 8.38 10.38 7.98 10.38 7.5C10.38 7.02 9.98 6.63 9.5 6.63ZM12.63 7.5C12.63 7.02 13.02 6.63 13.5 6.63C13.98 6.63 14.38 7.02 14.38 7.5C14.38 7.98 13.98 8.38 13.5 8.38C13.02 8.38 12.63 7.98 12.63 7.5Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 15 15" {nodes} {...props} />
