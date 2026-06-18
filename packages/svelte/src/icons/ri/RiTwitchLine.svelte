<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4.3 3H21V14.7L16.3 19.4H12.4L9.9 21.8H7V19.4H3V6.2L4.3 3ZM5 17.4H9V19.8H9.1L11.6 17.4H15.47L19 13.87V5H5V17.4ZM15 8H17V12.7H15V8ZM15 8H17V12.7H15V8ZM10 8H12V12.7H10V8Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
