import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-project-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcProject16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M1.75 0h12.5C15.22 0 16 0.78 16 1.75v12.5A1.75 1.75 0 0 1 14.25 16H1.75A1.75 1.75 0 0 1 0 14.25V1.75C0 0.780.78 0 1.75 0ZM1.5 1.75v12.5c0 0.140.110.250.250.25h12.5a0.250.25 0 0 0 0.25-0.25V1.75a0.250.25 0 0 0-0.25-0.25H1.75a0.250.25 0 0 0-0.250.25ZM11.75 3a0.750.75 0 0 1 0.750.75v7.5a0.750.75 0 0 1-1.5 0v-7.5a0.750.75 0 0 1 0.75-0.75Zm-8.250.75a0.750.75 0 0 1 1.5 0v5.5a0.750.75 0 0 1-1.5 0ZM8 3a0.750.75 0 0 1 0.750.75v3.5a0.750.75 0 0 1-1.5 0v-3.5A0.750.75 0 0 1 8 3Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcProject16;
