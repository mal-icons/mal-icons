<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M4.51 2.88C4.57 2.38 5 2 5.5 2H18.5C19 2 19.43 2.38 19.49 2.88L20.99 14.88C21 14.92 21 14.96 21 15V21C21 21.55 20.55 22 20 22H4C3.45 22 3 21.55 3 21V15C3 14.96 3 14.92 3.01 14.88L4.51 2.88ZM6.38 4L5.13 14H18.87L17.62 4H6.38ZM19 16H5V20H19V16ZM15 17H17V19H15V17ZM13 17H11V19H13V17Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
