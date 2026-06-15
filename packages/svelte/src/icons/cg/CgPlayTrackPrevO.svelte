<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M8 8C8.55 8 9 8.45 9 9V15C9 15.55 8.55 16 8 16C7.45 16 7 15.55 7 15V9C7 8.45 7.45 8 8 8ZM16 15.46L10 12L16 8.54V15.46Z","fill":"currentColor"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3C7.03 3 3 7.03 3 12ZM12 1C5.92 1 1 5.92 1 12C1 18.08 5.92 23 12 23C18.08 23 23 18.08 23 12C23 5.92 18.08 1 12 1Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
