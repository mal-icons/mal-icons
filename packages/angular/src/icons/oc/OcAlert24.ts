import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-alert-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcAlert24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M13 17.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-0.25-8.25a0.750.75 0 0 0-1.5 0v4.5a0.750.75 0 0 0 1.5 0v-4.5Z"}],["path",{"d":"M9.84 3.24c0.96-1.66 3.37-1.66 4.33 0l8.97 15.5c0.96 1.67-0.24 3.75-2.16 3.75H3.03c-1.93 0-3.13-2.08-2.16-3.75Zm3.030.75a1 1 0 0 0-1.73 0L2.17 19.5A1 1 0 0 0 3.03 21h17.93a1 1 0 0 0 0.87-1.5L12.87 3.99Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcAlert24;
