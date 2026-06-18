<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M6.03 17.43C3.08 16.25 1 13.37 1 10C1 5.58 4.58 2 9 2C12.39 2 15.3 4.11 16.46 7.1C16.8 7.03 17.14 7 17.5 7C20.54 7 23 9.46 23 12.5C23 15.37 20.8 17.73 18 17.98C17.99 14.67 15.31 12 12 12C8.88 12 6.31 14.38 6.03 17.43ZM13 16.27L14.96 15.13L15.96 16.87L14 18L15.96 19.13L14.96 20.87L13 19.73V22H11V19.73L9.04 20.87L8.04 19.13L10 18L8.04 16.87L9.04 15.13L11 16.27V14H13V16.27Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
