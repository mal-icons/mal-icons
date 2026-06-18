<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M12 4c-4.88 0-9 4.12-9 9s4.12 9 9 9 9-4.12 9-9-4.12-9-9-9zm0 16c-3.79 0-7-3.21-7-7s3.21-7 7-7 7 3.21 7 7-3.21 7-7 7z"}],["path",{"d":"M13 8h-2v4H7v2h4v4h2v-4h4v-2h-4zm7.29-1.29-3.01-3 1.41-1.42 3.01 3zM5.28 2.29 6.7 3.71l-2.99 3-1.42-1.41z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 24 24" {nodes} {...props} />
