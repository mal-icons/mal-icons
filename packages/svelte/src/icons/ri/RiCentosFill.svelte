<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 13.06L16.47 17.53L12 22L7.53 17.53L12 13.06ZM4 16.12L7.88 20L4 20L4 16.12ZM20 16.12L20 20L16.12 20L20 16.12ZM17.53 7.53L22 12L17.53 16.47L13.06 12L17.53 7.53ZM6.47 7.53L10.94 12L6.47 16.47L2 12L6.47 7.53ZM12 2L16.47 6.47L12 10.94L7.53 6.47L12 2ZM7.88 4L4 7.88L4 4L7.88 4ZM20 4L20 7.88L16.12 4L20 4Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
