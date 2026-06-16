import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-line-end-circle",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrLineEndCircle {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M640-300q75 0 127.5-52.5T820-480q0-75-52.5-127.5T640-660q-75 0-127.5 52.5T460-480q0 75 52.5 127.5T640-300Zm0 60q-92 0-159.5-60.5T402-450H110q-13 0-21.5-8.5T80-480q0-13 8.5-21.5T110-510h292q11-89 78.5-149.5T640-720q100 0 170 70t70 170q0 100-70 170t-170 70Zm0-240Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrLineEndCircle;
