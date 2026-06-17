import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-life-buoy",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiLifeBuoy {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M367.35 80.51a208 208 0 0 0-222.640.07l54.33 69.85a120 120 0 0 1 113.890.04l54.42-69.96zm64.06 64.2l-69.85 54.33a120 120 0 0 1-0.04 113.89l69.96 54.42a208 208 0 0 0-0.07-222.64zm-280.94 54.36L80.51 144.65a208 208 0 0 0 0.07 222.64l69.85-54.33a120 120 0 0 1 0.04-113.89zM312.96 361.56a120 120 0 0 1-113.89-0.04l-54.42 69.96a208 208 0 0 0 222.64-0.07l-54.33-69.85z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiLifeBuoy;
