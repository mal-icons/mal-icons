import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-flower-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiFlowerFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.46 2.31L12 2.08L11.54 2.31C10.4 2.9 9.35 3.66 8.46 4.57C9.77 5.26 10.97 6.15 12 7.2C13.03 6.15 14.23 5.26 15.54 4.57C14.65 3.66 13.6 2.9 12.46 2.31ZM10.7 8.73C8.99 6.94 6.73 5.67 4.18 5.2L3 4.98V13C3 16.8 5.36 20.06 8.7 21.37C8.24 20 8 18.53 8 17C8 13.91 9 11.05 10.7 8.73ZM21 4.98L19.82 5.2C14.23 6.22 10 11.12 10 17C10 18.54 10.29 20.01 10.82 21.36L11.06 21.98C11.37 21.99 11.69 22 12 22C16.97 22 21 17.97 21 13V4.98Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiFlowerFill;
