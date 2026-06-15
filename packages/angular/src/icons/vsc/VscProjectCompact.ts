import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-vsc-project-compact",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class VscProjectCompact {
  readonly viewBox = "0 0 12 12";
  readonly nodes: NodeTuple[] = [["path",{"d":"M2.5 0C1.12 0 0 1.12 0 2.5V9.5C0 10.88 1.12 12 2.5 12H9.5C10.88 12 12 10.88 12 9.5V2.5C12 1.12 10.88 0 9.5 0H2.5ZM11 3H1V2.5C1 1.67 1.67 1 2.5 1H9.5C10.33 1 11 1.67 11 2.5V3ZM1 4H11V9.5C11 10.33 10.33 11 9.5 11H2.5C1.67 11 1 10.33 1 9.5V4Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default VscProjectCompact;
