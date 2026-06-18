import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-water-flash-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiWaterFlashLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 3.1L7.06 8.05C4.32 10.79 4.32 15.22 7.06 17.95C9.79 20.69 14.22 20.69 16.95 17.95C19.69 15.22 19.69 10.79 16.95 8.05L12 3.1ZM12 0.27L18.37 6.64C21.88 10.15 21.88 15.85 18.37 19.37C14.85 22.88 9.16 22.88 5.64 19.37C2.13 15.85 2.13 10.15 5.64 6.64L12 0.27ZM13 11H15.5L11 17.5V13H8.5L13 6.5V11Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiWaterFlashLine;
