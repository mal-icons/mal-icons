<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M438-780v-60h83v60h-83Zm0 660v-60h83v60h-83ZM268-780v-60h83v60h-83Zm0 660v-60h83v60h-83ZM120-609v-83h60v83h-60Zm0 171v-83h60v83h-60Zm0 170v-83h60v83h-60Zm519 148q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T639-180h55v-600h-55q-12.75 0-21.37-8.68-8.62-8.68-8.62-21.5 0-12.82 8.63-21.32T639-840h171q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T810-780h-56v600h56q12.75 0 21.38 8.68 8.63 8.68 8.63 21.5 0 12.83-8.62 21.33T810-120H639Zm-459 0q-24 0-42-18t-18-42h60v60Zm-60-660q0-24 18-42t42-18v60h-60Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
