<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8 13C7.45 13 7 12.55 7 12C7 11.45 7.45 11 8 11C8.55 11 9 11.45 9 12C9 12.55 8.55 13 8 13Z","fill":"currentColor"}],["path",{"d":"M8 17C7.45 17 7 16.55 7 16C7 15.45 7.45 15 8 15C8.55 15 9 15.45 9 16C9 16.55 8.55 17 8 17Z","fill":"currentColor"}],["path",{"d":"M11 16C11 16.55 11.45 17 12 17C12.55 17 13 16.55 13 16C13 15.45 12.55 15 12 15C11.45 15 11 15.45 11 16Z","fill":"currentColor"}],["path",{"d":"M16 17C15.45 17 15 16.55 15 16C15 15.45 15.45 15 16 15C16.55 15 17 15.45 17 16C17 16.55 16.55 17 16 17Z","fill":"currentColor"}],["path",{"d":"M11 12C11 12.55 11.45 13 12 13C12.55 13 13 12.55 13 12C13 11.45 12.55 11 12 11C11.45 11 11 11.45 11 12Z","fill":"currentColor"}],["path",{"d":"M16 13C15.45 13 15 12.55 15 12C15 11.45 15.45 11 16 11C16.55 11 17 11.45 17 12C17 12.55 16.55 13 16 13Z","fill":"currentColor"}],["path",{"d":"M8 7C7.45 7 7 7.45 7 8C7 8.55 7.45 9 8 9H16C16.55 9 17 8.55 17 8C17 7.45 16.55 7 16 7H8Z","fill":"currentColor"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M6 3C4.34 3 3 4.34 3 6V18C3 19.66 4.34 21 6 21H18C19.66 21 21 19.66 21 18V6C21 4.34 19.66 3 18 3H6ZM18 5H6C5.45 5 5 5.45 5 6V18C5 18.55 5.45 19 6 19H18C18.55 19 19 18.55 19 18V6C19 5.45 18.55 5 18 5Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
