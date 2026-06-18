<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M17 4H3V6H17V4ZM13 11H3V13H13V11ZM17 18H3V20H17V18ZM15.99 8.81L17.4 7.4L22 12L17.4 16.59L15.99 15.18L19.17 12L15.99 8.81Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
