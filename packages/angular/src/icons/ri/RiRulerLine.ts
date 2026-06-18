import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-ruler-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiRulerLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M6.34 14.73L3.51 17.56L7.05 21.09L20.49 7.66L16.95 4.12L14.83 6.24L16.24 7.66L14.83 9.07L13.41 7.66L11.29 9.78L13.41 11.9L12 13.31L9.88 11.19L7.76 13.31L9.17 14.73L7.76 16.14L6.34 14.73ZM17.66 2L22.61 6.95C23 7.34 23 7.97 22.61 8.36L7.76 23.21C7.37 23.6 6.73 23.6 6.34 23.21L1.39 18.26C1 17.87 1 17.24 1.39 16.85L16.24 2C16.63 1.61 17.27 1.61 17.66 2Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiRulerLine;
