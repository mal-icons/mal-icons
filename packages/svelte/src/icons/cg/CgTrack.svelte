<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15Z","fill":"currentColor"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M12 3C12.55 3 13 3.45 13 4V5.07C16.07 5.51 18.49 7.93 18.93 11H20C20.55 11 21 11.45 21 12C21 12.55 20.55 13 20 13H18.93C18.49 16.07 16.07 18.49 13 18.93V20C13 20.55 12.55 21 12 21C11.45 21 11 20.55 11 20V18.93C7.93 18.49 5.51 16.07 5.07 13H4C3.45 13 3 12.55 3 12C3 11.45 3.45 11 4 11H5.07C5.51 7.93 7.93 5.51 11 5.07V4C11 3.45 11.45 3 12 3ZM7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17C9.24 17 7 14.76 7 12Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
