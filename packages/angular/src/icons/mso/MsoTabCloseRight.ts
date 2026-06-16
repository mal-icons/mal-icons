import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-tab-close-right",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoTabCloseRight {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m366-324 114-114 114 114 42-42-114-114 114-114-42-42-114 114-114-114-42 42 114 114-114 114 42 42ZM180-180v-600 600-7 7Zm0 60q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v398q-14.17-5-29.08-7.5Q796-392 780-393v-387H180v600h387q1 16 3.5 30.92Q573-134.17 578-120H180Zm594 80-42-42 73-74H624v-60h181l-73-74 42-42 146 146L774-40Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoTabCloseRight;
