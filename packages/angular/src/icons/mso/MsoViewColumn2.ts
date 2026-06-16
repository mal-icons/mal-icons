import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-view-column-2",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoViewColumn2 {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M570-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h210q24 0 42 18t18 42v600q0 24-18 42t-42 18H570Zm0-660v600h210v-600H570ZM180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h210q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-660v600h210v-600H180Zm600 0H570h210Zm-390 0H180h210Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoViewColumn2;
