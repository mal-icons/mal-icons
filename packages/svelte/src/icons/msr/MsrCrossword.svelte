<script lang="ts">
  import type { NodeTuple } from "@mal-icons/core";
  import IconBase from "../../IconBase.svelte";

  const nodes: NodeTuple[] = [["path",{"d":"M386-326v186h187v-186H386Zm-60-60v-187H140v187h186Zm60 0h187v-187H386v187Zm247 0h187v-187H633v187Zm0-247h187v-187H633v187ZM326-326H140q-24.75 0-42.37-17.62T80-386v-187q0-24.75 17.63-42.37T140-633h433v-187q0-24.75 17.63-42.37T633-880h187q24.75 0 42.38 17.63T880-820v434q0 24.75-17.62 42.38T820-326H633v186q0 24.75-17.62 42.38T573-80H386q-24.75 0-42.37-17.62T326-140v-186Z"}]];
  let props = $props();
</script>

<IconBase viewBox="0 -960 960 960" {nodes} {...props} />
