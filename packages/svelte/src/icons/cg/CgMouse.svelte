<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 5C11.45 5 11 5.45 11 6V10C11 10.55 11.45 11 12 11C12.55 11 13 10.55 13 10V6C13 5.45 12.55 5 12 5Z","fill":"currentColor"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M4 8C4 3.58 7.58 0 12 0C16.42 0 20 3.58 20 8V16C20 20.42 16.42 24 12 24C7.58 24 4 20.42 4 16V8ZM18 8V16C18 19.31 15.31 22 12 22C8.69 22 6 19.31 6 16V8C6 4.69 8.69 2 12 2C15.31 2 18 4.69 18 8Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
