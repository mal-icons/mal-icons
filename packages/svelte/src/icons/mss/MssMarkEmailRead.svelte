<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M633-80 472-241l43-43 118 118 244-244 43 43L633-80ZM478-527l334-213H144l334 213ZM80-172v-628h797v304l-60 60v-248L478-467 140-684v452h256l60 60H80Zm399-286Zm-1-69Zm1 60Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
