<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M350-274h178q14.45 0 24.23-9.77Q562-293.55 562-308v-54l82 43v-153l-82 43v-54q0-14.45-9.77-24.22Q542.45-517 528-517H350q-14.02 0-23.51 9.78Q317-497.45 317-483v175q0 14.45 9.49 24.23Q335.98-274 350-274ZM160-120v-480l320-240 320 240v480H160Zm60-60h520v-394L480-763 220-574v394Zm260-292Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
