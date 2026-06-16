import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-display-external-input",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoDisplayExternalInput {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m720-80-43-43 88-87H560v-60h205l-87-88 42-42 160 160L720-80Zm-540-40q-24 0-42-18t-18-42v-172h60v172h172v60H180Zm-60-488v-172q0-24 18-42t42-18h172v60H180v172h-60Zm660 0v-172H608v-60h172q24 0 42 18t18 42v172h-60Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoDisplayExternalInput;
