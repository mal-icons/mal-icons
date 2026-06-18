import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-number-2",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiNumber2 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16 7.5C16 5.29 14.21 3.5 12 3.5C9.79 3.5 8 5.29 8 7.5H6C6 4.19 8.69 1.5 12 1.5C15.31 1.5 18 4.19 18 7.5C18 8.93 17.5 10.24 16.66 11.28L9.34 20L18 20V22H6L6 20.87L15.06 10.07C15.65 9.38 16 8.48 16 7.5Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiNumber2;
