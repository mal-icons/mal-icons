import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-ruler-fill",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiRulerFill {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M4.93 13.31L7.05 15.44L8.46 14.02L6.34 11.9L8.46 9.78L11.29 12.61L12.71 11.19L9.88 8.36L12 6.24L14.12 8.36L15.54 6.95L13.41 4.83L16.24 2C16.63 1.61 17.27 1.61 17.66 2L22.61 6.95C23 7.34 23 7.97 22.61 8.36L7.76 23.21C7.37 23.6 6.73 23.6 6.34 23.21L1.39 18.26C1 17.87 1 17.24 1.39 16.85L4.93 13.31Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiRulerFill;
