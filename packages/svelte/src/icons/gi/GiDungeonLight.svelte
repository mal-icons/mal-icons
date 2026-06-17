<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M128 65c-4.37 0-8.740.49-13 1.47V151h26V66.47A57.81 57.81 0 0 0 128 65zm-31 9.35C83.02 84.02 73 101.45 73 128v23h24V74.35zm62 0V151h24v-23c0-26.55-10.02-43.98-24-53.65zm38.18 26.15C199.63 108.78 201 117.96 201 128v137H73.23L304 490h186V384L197.18 100.5zM73 169v78h24v-78H73zm42 0v78h26v-78h-26zm44 0v78h24v-78h-24z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 0 512 512" {nodes} {...props} />
