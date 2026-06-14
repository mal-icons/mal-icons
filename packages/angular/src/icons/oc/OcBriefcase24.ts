import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-briefcase-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcBriefcase24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M7.5 1.75C7.50.78 8.28 0 9.25 0h5.5c0.97 0 1.750.78 1.75 1.75V4h4.75c0.97 0 1.750.78 1.75 1.75v14.5A1.75 1.75 0 0 1 21.25 22H2.75A1.75 1.75 0 0 1 1 20.25V5.75C1 4.78 1.78 4 2.75 4H7.5Zm-5 10.24v8.26c0 0.140.110.250.250.25h18.5a0.250.25 0 0 0 0.25-0.25v-8.26A4.24 4.24 0 0 1 18.75 13H5.25a4.24 4.24 0 0 1-2.75-1.01Zm19-3.24v-3a0.250.25 0 0 0-0.25-0.25H2.75a0.250.25 0 0 0-0.250.25v3a2.75 2.75 0 0 0 2.75 2.75h13.5a2.75 2.75 0 0 0 2.75-2.75Zm-6.5-7a0.250.25 0 0 0-0.25-0.25h-5.5a0.250.25 0 0 0-0.250.25V4h6Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcBriefcase24;
