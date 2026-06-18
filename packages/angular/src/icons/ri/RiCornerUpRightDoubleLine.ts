import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-corner-up-right-double-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiCornerUpRightDoubleLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4 10L4 19L6 19L6 12L12.17 12L8.22 15.95L9.64 17.36L16 11L9.64 4.64L8.22 6.05L12.17 10L4 10ZM15.25 4.64L13.84 6.05L18.79 11L13.84 15.95L15.25 17.36L21.61 11L15.25 4.64Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiCornerUpRightDoubleLine;
