<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M336-120v-35l84-85H80v-600h800v600H540l84 85v35H336ZM140-396h680v-384H140v384Zm0 0v-384 384Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
