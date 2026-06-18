<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M11.14 2H12.86C14.87 2 15.95 2.28 16.93 2.8C17.91 3.32 18.68 4.09 19.2 5.07C19.72 6.05 20 7.13 20 9.14V14.86C20 16.87 19.72 17.95 19.2 18.93C18.68 19.91 17.91 20.68 16.93 21.2C15.95 21.72 14.87 22 12.86 22H11.14C9.13 22 8.05 21.72 7.07 21.2C6.09 20.68 5.32 19.91 4.8 18.93C4.28 17.95 4 16.87 4 14.86V9.14C4 7.13 4.28 6.05 4.8 5.07C5.32 4.09 6.09 3.32 7.07 2.8C8.05 2.28 9.13 2 11.14 2ZM11 6V11H13V6H11Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
