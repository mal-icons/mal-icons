import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-split-view-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcSplitView16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1.75 0h12.5C15.22 0 16 0.78 16 1.75v12.5c0 0.46-0.180.91-0.51 1.24A1.75 1.75 0 0 1 14.25 16H1.75c-0.46 0-0.91-0.18-1.24-0.51A1.75 1.75 0 0 1 0 14.25V1.75C0 0.780.78 0 1.75 0ZM1.5 1.75v12.5c0 0.140.110.250.250.25H7.5v-13H1.75a0.250.25 0 0 0-0.250.25ZM9 14.5h5.25a0.250.25 0 0 0 0.25-0.25V1.75a0.250.25 0 0 0-0.25-0.25H9Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcSplitView16;
