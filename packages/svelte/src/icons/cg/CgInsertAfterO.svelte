<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9 8C8.45 8 8 8.45 8 9C8 9.55 8.45 10 9 10H11V12C11 12.55 11.45 13 12 13C12.55 13 13 12.55 13 12V10H15C15.55 10 16 9.55 16 9C16 8.45 15.55 8 15 8H13V6C13 5.45 12.55 5 12 5C11.45 5 11 5.45 11 6V8H9Z","fill":"currentColor"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M4 9C4 4.58 7.58 1 12 1C16.42 1 20 4.58 20 9C20 13.42 16.42 17 12 17C7.58 17 4 13.42 4 9ZM12 15C8.69 15 6 12.31 6 9C6 5.69 8.69 3 12 3C15.31 3 18 5.69 18 9C18 12.31 15.31 15 12 15Z","fill":"currentColor"}],["path",{"d":"M5 20C4.45 20 4 20.45 4 21C4 21.55 4.45 22 5 22H19C19.55 22 20 21.55 20 21C20 20.45 19.55 20 19 20H5Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
