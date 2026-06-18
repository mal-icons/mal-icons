import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-check-double-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiCheckDoubleFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.6 13.76L13.01 15.17L21.48 6.71L22.89 8.12L13.01 18L6.65 11.64L8.06 10.22L10.19 12.35L11.6 13.76L11.6 13.76ZM11.6 10.93L16.56 5.98L17.97 7.39L13.01 12.34L11.6 10.93ZM8.78 16.59L7.36 18L1 11.64L2.41 10.22L3.83 11.64L3.83 11.64L8.78 16.59Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiCheckDoubleFill;
