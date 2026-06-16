<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m580-465-43-43 183-232H305l-60-60h597L580-465ZM813-61 560-314v154H400v-314L61-813l43-43 752 752-43 43ZM537-508Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
