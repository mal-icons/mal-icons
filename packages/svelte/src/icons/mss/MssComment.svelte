<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M240-400h480v-60H240v60Zm0-130h480v-60H240v60Zm0-130h480v-60H240v60ZM80-240v-640h800v800L720-240H80Zm60-60h680v-520H140v520Zm0 0v-520 520Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
