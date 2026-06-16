import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-msr-hallway",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsrHallway {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M180-80q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h141l139-139q9-9 21-9t21 9l140 139h138q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600v-600H180v600Zm267-124-81-113q-5-6-12-6t-12 6l-88 114q-6 8-1.5 16t13.5 8h431q8.5 0 12.75-8t-0.75-16L591-422q-5-6-12-6t-12 6L447-264Zm-59-536h186l-93-93-93 93ZM180-140v-600 600Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsrHallway;
