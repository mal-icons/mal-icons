<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M250-120v-60h200v-140H80v-520h800v520H510v140h200v60H250ZM140-380h680v-400H140v400Zm0 0v-400 400Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
