<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"m280-120-43-43 86-86q-108 7-195.5-70.5T40-520q0-117 81.5-198.5T320-800h120v60H320q-91 0-155.5 64.5T100-520q0 94 65.5 154T326-308l-89-89 43-43 160 160-160 160Zm240-40v-280h360v280H520Zm0-360v-280h360v280H520Zm60-60h240v-160H580v160Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
