<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M16 14V16H8V14H16Z","fill":"currentColor"}],["path",{"d":"M7.76 8.7L9.17 7.29L12 10.12L14.83 7.29L16.24 8.7L12 12.95L7.76 8.7Z","fill":"currentColor"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M12 23C18.08 23 23 18.08 23 12C23 5.92 18.08 1 12 1C5.92 1 1 5.92 1 12C1 18.08 5.92 23 12 23ZM12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
