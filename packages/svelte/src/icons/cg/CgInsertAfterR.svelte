<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M9 8C8.45 8 8 8.45 8 9C8 9.55 8.45 10 9 10H11V12C11 12.55 11.45 13 12 13C12.55 13 13 12.55 13 12V10H15C15.55 10 16 9.55 16 9C16 8.45 15.55 8 15 8H13V6C13 5.45 12.55 5 12 5C11.45 5 11 5.45 11 6V8H9Z","fill":"currentColor"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M4 4C4 2.34 5.34 1 7 1H17C18.66 1 20 2.34 20 4V14C20 15.66 18.66 17 17 17H7C5.34 17 4 15.66 4 14V4ZM7 3H17C17.55 3 18 3.45 18 4V14C18 14.55 17.55 15 17 15H7C6.45 15 6 14.55 6 14V4C6 3.45 6.45 3 7 3Z","fill":"currentColor"}],["path",{"d":"M5 20C4.45 20 4 20.45 4 21C4 21.55 4.45 22 5 22H19C19.55 22 20 21.55 20 21C20 20.45 19.55 20 19 20H5Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
