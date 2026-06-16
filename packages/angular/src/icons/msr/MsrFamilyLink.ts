import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-family-link",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrFamilyLink {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m500-225 260-360-260-253-260 253 260 360ZM390-40q-51 0-90.5-30.5T246-149q-6-23-25.5-37T178-200q-16 0-30 6.5T124-175l-61-51q21-26 51-40t64-14q51 0 91 30.5t54 78.5q6 23 25 37t42 14q20 0 36-9.5t25-26.5L175-538q-17-24-14.5-53.5T184-642l263-256q11-11 25-16.5t28-5.5q14 0 28 5.5t25 16.5l263 256q21 20 23.5 50T825-538L520-116q-20 35-54 55.5T390-40Zm110-492Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrFamilyLink;
