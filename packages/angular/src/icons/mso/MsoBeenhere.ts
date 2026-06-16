import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-beenhere",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoBeenhere {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"M480-40 184-262q-11.25-8.25-17.62-21T160-310v-510q0-24 18-42t42-18h520q24 0 42 18t18 42v510q0 14.25-6.37 27T776-262L480-40Zm0-75 260-200v-505H220v505l260 200Zm-42-245 226-226-43-42-184 184-99-99-42 42 142 141Zm42-460H220h520-260Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoBeenhere;
