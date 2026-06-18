<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 6C12.83 6 13.5 5.33 13.5 4.5C13.5 3.67 12.83 3 12 3C11.17 3 10.5 3.67 10.5 4.5C10.5 5.33 11.17 6 12 6ZM9 10H11V18H9V20H15V18H13V8H9V10Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
