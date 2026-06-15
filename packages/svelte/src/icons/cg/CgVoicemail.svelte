<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M10 15C10.63 14.16 11 13.13 11 12C11 9.24 8.76 7 6 7C3.24 7 1 9.24 1 12C1 14.76 3.24 17 6 17H18C20.76 17 23 14.76 23 12C23 9.24 20.76 7 18 7C15.24 7 13 9.24 13 12C13 13.13 13.37 14.16 14 15H10ZM6 15C7.66 15 9 13.66 9 12C9 10.34 7.66 9 6 9C4.34 9 3 10.34 3 12C3 13.66 4.34 15 6 15ZM18 15C19.66 15 21 13.66 21 12C21 10.34 19.66 9 18 9C16.34 9 15 10.34 15 12C15 13.66 16.34 15 18 15Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
