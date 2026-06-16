<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M80-120v-431h60v371h452v60H80Zm120-120v-431h60v371h453v60H200Zm120-120v-480h560v480H320Zm60-60h440v-298H380v298Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
