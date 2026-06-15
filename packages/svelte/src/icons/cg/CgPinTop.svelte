<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 14C13.1 14 14 14.9 14 16C14 17.1 13.1 18 12 18C10.9 18 10 17.1 10 16C10 14.9 10.9 14 12 14Z","fill":"currentColor"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M8 5C7.45 5 7 4.55 7 4C7 3.45 7.45 3 8 3H16C16.55 3 17 3.45 17 4C17 4.55 16.55 5 16 5H13V10.08C15.84 10.56 18 13.03 18 16C18 19.31 15.31 22 12 22C8.69 22 6 19.31 6 16C6 13.03 8.16 10.56 11 10.08V5H8ZM12 12C14.21 12 16 13.79 16 16C16 18.21 14.21 20 12 20C9.79 20 8 18.21 8 16C8 13.79 9.79 12 12 12Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
