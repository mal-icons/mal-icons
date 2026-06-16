import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mso-category",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MsoCategory {
  readonly viewBox = "0 -960 960 960";
  readonly nodes: NodeTuple[] = [["path",{"d":"m261-526 220-354 220 354H261ZM706-80q-74 0-124-50t-50-124q0-74 50-124t124-50q74 0 124 50t50 124q0 74-50 124T706-80Zm-586-25v-304h304v304H120Zm586.09-35Q754-140 787-173.08q33-33.08 33-81Q820-302 786.92-335q-33.08-33-81-33Q658-368 625-334.91q-33 33.08-33 81Q592-206 625.08-173q33.09 33 81 33ZM180-165h184v-184H180v184Zm189-421h224L481-767 369-586Zm112 0ZM364-349Zm342 95Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MsoCategory;
