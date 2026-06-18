<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M7 21.5C4.51 21.5 2.5 19.49 2.5 17C2.5 14.51 4.51 12.5 7 12.5C9.49 12.5 11.5 14.51 11.5 17C11.5 19.49 9.49 21.5 7 21.5ZM17 11.5C14.51 11.5 12.5 9.49 12.5 7C12.5 4.51 14.51 2.5 17 2.5C19.49 2.5 21.5 4.51 21.5 7C21.5 9.49 19.49 11.5 17 11.5ZM3 8C3 5.24 5.24 3 8 3H11V5H8C6.34 5 5 6.34 5 8V11H3V8ZM19 13V16C19 17.66 17.66 19 16 19H13V21H16C18.76 21 21 18.76 21 16V13H19Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
