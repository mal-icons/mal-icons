import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-direction-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiDirectionLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 3.51L3.51 12L12 20.49L20.49 12L12 3.51ZM12.71 1.39L22.61 11.29C23 11.68 23 12.32 22.61 12.71L12.71 22.61C12.32 23 11.68 23 11.29 22.61L1.39 12.71C1 12.32 1 11.68 1.39 11.29L11.29 1.39C11.68 1 12.32 1 12.71 1.39ZM13 10V7.5L16.5 11L13 14.5V12H10V15H8V11C8 10.45 8.45 10 9 10H13Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiDirectionLine;
