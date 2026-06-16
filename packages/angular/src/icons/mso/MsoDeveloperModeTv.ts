import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-developer-mode-tv",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoDeveloperModeTv {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M80-693v-87q0-23 18-41.5t42-18.5h680q23 0 41.5 18.5T880-780v87h-60v-87H140v87H80Zm250 573v-80H140q-24 0-42-18.5T80-260v-93h60v93h680v-93h60v93q0 23-18.5 41.5T820-200H630v80H330Zm150-403Zm-316 3 118-118-42-42L80-520l160 160 42-42-118-118Zm632 0L678-402l42 42 160-160-160-160-42 42 118 118Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoDeveloperModeTv;
