<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M284-240q-18.33 0-31.17-12.83Q240-265.67 240-284v-310q0-19.58 14-33.29Q268-641 288-641t33.5 13.71Q335-613.58 335-594v185l276-276q15.09-15 36.04-15 20.96 0 36.88 16.01Q699-668.82 699-646.91T684-610L409-335h185q19.58 0 33.29 13.71Q641-307.58 641-288q0 20-13.71 34-13.71 14-33.29 14H284Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
