import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-focus-center-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcFocusCenter24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2.75 15.25a0.750.75 0 0 1 0.750.75v4.25c0 0.140.110.250.250.25H8A0.750.75 0 0 1 8 22H3.75A1.75 1.75 0 0 1 2 20.25V16a0.750.75 0 0 1 0.75-0.75Zm18.5 0A0.750.75 0 0 1 22 16v4.25A1.75 1.75 0 0 1 20.25 22H16a0.750.75 0 0 1 0-1.5h4.25a0.250.25 0 0 0 0.25-0.25V16a0.750.75 0 0 1 0.75-0.75ZM8 2a0.750.75 0 0 1 0 1.5H3.75a0.250.25 0 0 0-0.250.25V8A0.750.75 0 0 1 2 8V3.75C2 2.78 2.78 2 3.75 2H8Zm12.25 0c0.97 0 1.750.78 1.75 1.75V8a0.750.75 0 0 1-1.5 0V3.75a0.250.25 0 0 0-0.25-0.25H16A0.750.75 0 0 1 16 2h4.25ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcFocusCenter24;
