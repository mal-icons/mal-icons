<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M8.02 6.98C7.46 6.98 7.02 7.43 7.02 7.99C7.02 8.54 7.46 8.99 8.02 8.99H15.97C16.52 8.99 16.97 8.54 16.97 7.99C16.97 7.43 16.52 6.98 15.97 6.98H8.02Z","fill":"currentColor"}],["path",{"d":"M7.02 12C7.02 11.45 7.46 11 8.02 11H15.97C16.52 11 16.97 11.45 16.97 12C16.97 12.55 16.52 13 15.97 13H8.02C7.46 13 7.02 12.55 7.02 12Z","fill":"currentColor"}],["path",{"d":"M8.02 15.01C7.47 15.01 7.02 15.46 7.02 16.02C7.02 16.57 7.47 17.02 8.02 17.02H15.98C16.53 17.02 16.98 16.57 16.98 16.02C16.98 15.46 16.53 15.01 15.98 15.01H8.02Z","fill":"currentColor"}],["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M3 6C3 4.34 4.34 3 6 3H18C19.66 3 21 4.34 21 6V18C21 19.66 19.66 21 18 21H6C4.34 21 3 19.66 3 18V6ZM6 5H18C18.55 5 19 5.45 19 6V18C19 18.55 18.55 19 18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5Z","fill":"currentColor"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
