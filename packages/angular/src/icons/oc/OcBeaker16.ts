import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-beaker-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcBeaker16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 5.78V2.5h-0.25a0.750.75 0 0 1 0-1.5h6.5a0.750.75 0 0 1 0 1.5H11v3.28l3.67 5.76C15.62 13.04 14.54 15 12.77 15H3.23c-1.78 0-2.85-1.96-1.9-3.46Zm-2.4 6.57a0.750.75 0 0 0 0.63 1.15h9.53a0.750.75 0 0 0 0.63-1.15L12.23 10.5h-8.45ZM9.5 2.5h-3V6c0 0.14-0.040.28-0.120.4L4.73 9h6.54L9.62 6.4A0.750.75 0 0 1 9.5 6Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcBeaker16;
