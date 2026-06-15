<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M4 3C2.34 3 1 4.34 1 6V10C1 11.66 2.34 13 4 13H20C21.66 13 23 11.66 23 10V6C23 4.34 21.66 3 20 3H4ZM20 5H4C3.45 5 3 5.45 3 6V10C3 10.55 3.45 11 4 11H20C20.55 11 21 10.55 21 10V6C21 5.45 20.55 5 20 5Z","fill":"currentColor"}],["path",{"d":"M7 20C7 19.45 7.45 19 8 19H16C16.55 19 17 19.45 17 20C17 20.55 16.55 21 16 21H8C7.45 21 7 20.55 7 20Z","fill":"currentColor"}],["path",{"d":"M5 15C4.45 15 4 15.45 4 16C4 16.55 4.45 17 5 17H19C19.55 17 20 16.55 20 16C20 15.45 19.55 15 19 15H5Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
