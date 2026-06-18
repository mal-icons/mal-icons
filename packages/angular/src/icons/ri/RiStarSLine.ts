import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-ri-star-s-line",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RiStarSLine {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12 17L6.12 20.59L7.72 13.89L2.49 9.41L9.35 8.86L12 2.5L14.64 8.86L21.51 9.41L16.28 13.89L17.88 20.59L12 17ZM12 14.66L14.82 16.38L14.05 13.17L16.56 11.02L13.27 10.76L12 7.71L10.73 10.76L7.44 11.02L9.95 13.17L9.18 16.38L12 14.66Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RiStarSLine;
