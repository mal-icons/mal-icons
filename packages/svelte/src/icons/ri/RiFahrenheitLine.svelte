<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 12H19V14H12V21H10V8C10 5.79 11.79 4 14 4H21V6H14C12.9 6 12 6.9 12 8V12ZM4.5 10C2.57 10 1 8.43 1 6.5C1 4.57 2.57 3 4.5 3C6.43 3 8 4.57 8 6.5C8 8.43 6.43 10 4.5 10ZM4.5 8C5.33 8 6 7.33 6 6.5C6 5.67 5.33 5 4.5 5C3.67 5 3 5.67 3 6.5C3 7.33 3.67 8 4.5 8Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
