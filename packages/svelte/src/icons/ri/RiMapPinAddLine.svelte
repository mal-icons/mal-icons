<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 20.9L16.95 15.95C19.68 13.22 19.68 8.78 16.95 6.05C14.22 3.32 9.78 3.32 7.05 6.05C4.32 8.78 4.32 13.22 7.05 15.95L12 20.9ZM12 23.73L5.64 17.36C2.12 13.85 2.12 8.15 5.64 4.64C9.15 1.12 14.85 1.12 18.36 4.64C21.88 8.15 21.88 13.85 18.36 17.36L12 23.73ZM11 10V7H13V10H16V12H13V15H11V12H8V10H11Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
