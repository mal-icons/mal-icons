<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M160-80v-230h60v170h520v-170h60v230H160Zm0-410v-390h421l219 219v171h-60v-144H551v-186H220v330h-60Zm190 120v-60h260v60H350Zm320 0v-60h250v60H670Zm-630 0v-60h250v60H40Zm440-120Zm0 180Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
