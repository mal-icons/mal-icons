<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M15 2L19.71 6.71C19.89 6.89 20 7.15 20 7.41V21C20 21.55 19.55 22 19 22H5C4.45 22 4 21.55 4 21V3C4 2.45 4.45 2 5 2H15ZM12 7.5C10.4 7.5 9.1 8.75 9.01 10.32L9 10.5H11C11 9.95 11.45 9.5 12 9.5C12.55 9.5 13 9.95 13 10.5C13 10.75 12.91 10.98 12.75 11.16L12.67 11.24L9 14.55L9 16H15V14H12.6L14.01 12.73L14 12.72L14.01 12.73C14.62 12.18 15 11.38 15 10.5C15 8.84 13.66 7.5 12 7.5Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
