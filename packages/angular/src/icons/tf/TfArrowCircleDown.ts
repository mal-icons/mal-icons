import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-tf-arrow-circle-down",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class TfArrowCircleDown {
  readonly viewBox = "0 0 17 17";
  readonly nodes: NodeTuple[] = [["path",{"d":"M12.15 6.15l0.71 0.71-4.35 4.35-4.35-4.35 0.71-0.71 3.65 3.65 3.65-3.65zM17 8.5c0 4.69-3.81 8.5-8.5 8.5s-8.5-3.81-8.5-8.5 3.81-8.5 8.5-8.5 8.5 3.81 8.5 8.5zM16 8.5c0-4.14-3.36-7.5-7.5-7.5s-7.5 3.36-7.5 7.5 3.36 7.5 7.5 7.5 7.5-3.36 7.5-7.5z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default TfArrowCircleDown;
