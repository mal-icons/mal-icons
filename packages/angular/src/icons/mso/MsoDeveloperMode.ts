import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-developer-mode",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoDeveloperMode {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M344-296 160-480l184-184 42 44-140 140 140 140-42 44Zm-144 30h60v76h440v-76h60v166q0 24-18 42t-42 18H260q-24 0-42-18t-18-42v-166Zm60-440h-60v-154q0-24 18-42t42-18h440q24 0 42 18t18 42v154h-60v-64H260v64Zm0 576v30h440v-30H260Zm0-700h440v-30H260v30Zm356 534-42-44 140-140-140-140 42-44 184 184-184 184ZM260-830v-30 30Zm0 700v30-30Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoDeveloperMode;
