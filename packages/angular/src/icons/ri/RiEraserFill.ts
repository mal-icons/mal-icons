import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-eraser-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiEraserFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 19H21V21H12L8 21L1.51 14.51C1.12 14.12 1.12 13.49 1.51 13.1L12.12 2.49C12.51 2.1 13.14 2.1 13.54 2.49L21.31 10.27C21.7 10.66 21.7 11.29 21.31 11.68L14 19ZM15.66 14.51L19.19 10.98L12.83 4.61L9.29 8.15L15.66 14.51Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiEraserFill;
