import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-upload-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcUpload16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2.75 14A1.75 1.75 0 0 1 1 12.25v-2.5a0.750.75 0 0 1 1.5 0v2.5c0 0.140.110.250.250.25h10.5a0.250.25 0 0 0 0.25-0.25v-2.5a0.750.75 0 0 1 1.5 0v2.5A1.75 1.75 0 0 1 13.25 14Z"}],["path",{"d":"M11.78 4.72a0.750.75 0 1 1-1.06 1.06L8.75 3.81V9.5a0.750.75 0 0 1-1.5 0V3.81L5.28 5.78a0.750.75 0 1 1-1.06-1.06l3.25-3.25a0.750.75 0 0 1 1.06 0l3.25 3.25Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcUpload16;
