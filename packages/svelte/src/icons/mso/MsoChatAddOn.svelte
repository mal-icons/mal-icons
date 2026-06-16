<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M120-160v-620q0-24.75 17.63-42.37T180-840h520q24.75 0 42.38 17.63T760-780v223q-10-2-20-2.5t-20-0.5q-5 0-10 0.17-5 0.17-10 0.83v-221H180v440h301q-0.67 5-0.83 10-0.17 5-0.17 10 0 10 0.5 20t2.5 20H240L120-160Zm160-460h320v-60H280v60Zm0 170h200v-60H280v60Zm410 280v-120H570v-60h120v-120h60v120h120v60H750v120h-60ZM180-340v-440 440Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
