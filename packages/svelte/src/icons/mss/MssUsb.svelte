<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M480-80q-32 0-52-20t-20-52q0-22 11-40t31-29v-111H302q-24 0-42-18t-18-42v-109q-20-9-31-26.61-11-17.61-11-40.11Q200-600 220-620t52-20q32 0 52 20t20 52.41Q344-545 333-527.5T302-501v109h148v-340h-80l110-149 110 149h-80v340h148v-104h-42v-144h144v144h-42v104q0 24-18 42t-42 18H510v111q19.95 10.65 30.98 29.83Q552-172 552-152q0 32-20 52t-52 20Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
