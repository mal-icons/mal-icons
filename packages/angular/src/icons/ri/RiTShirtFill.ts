import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-t-shirt-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiTShirtFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14.51 5L17.12 2.39C17.51 2 18.14 2 18.53 2.39L22.78 6.64C23.17 7.03 23.17 7.66 22.78 8.05L19 11.83V21C19 21.55 18.55 22 18 22H6C5.45 22 5 21.55 5 21V11.83L1.22 8.05C0.83 7.66 0.83 7.03 1.22 6.64L5.46 2.39C5.85 2 6.49 2 6.88 2.39L9.48 5H14.51Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiTShirtFill;
