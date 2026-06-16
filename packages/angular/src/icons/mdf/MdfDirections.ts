import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdf-directions",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdfDirections {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"m21.41 10.59-7.99-8c-0.78-0.78-2.05-0.78-2.83 0l-8.01 8c-0.780.78-0.78 2.05 0 2.83l8.01 8c0.780.78 2.050.78 2.83 0l7.99-8c0.79-0.790.79-2.05 0-2.83zM13.5 14.5V12H10v3H8v-4c0-0.550.45-1 1-1h4.5V7.5L17 11l-3.5 3.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdfDirections;
