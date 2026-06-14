import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-rows-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcRows16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16 10.75v2.5A1.75 1.75 0 0 1 14.25 15H1.75A1.75 1.75 0 0 1 0 13.25v-2.5C0 9.780.78 9 1.75 9h12.5c0.97 0 1.750.78 1.75 1.75Zm0-8v2.5A1.75 1.75 0 0 1 14.25 7H1.75A1.75 1.75 0 0 1 0 5.25v-2.5C0 1.780.78 1 1.75 1h12.5c0.97 0 1.750.78 1.75 1.75Zm-1.75-0.25H1.75a0.250.25 0 0 0-0.250.25v2.5c0 0.140.110.250.250.25h12.5a0.250.25 0 0 0 0.25-0.25v-2.5a0.250.25 0 0 0-0.25-0.25Zm0 8H1.75a0.250.25 0 0 0-0.250.25v2.5c0 0.140.110.250.250.25h12.5a0.250.25 0 0 0 0.25-0.25v-2.5a0.250.25 0 0 0-0.25-0.25Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcRows16;
