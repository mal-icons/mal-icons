import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-hexagon-half",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsHexagonHalf {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M14 4.58v6.85L8 15V1zM8.50.13a1 1 0 0 0-1 0l-6 3.58a1 1 0 0 0-0.50.87v6.85a1 1 0 0 0 0.50.87l6 3.58a1 1 0 0 0 1 0l6-3.58a1 1 0 0 0 0.5-0.87V4.58a1 1 0 0 0-0.5-0.87z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsHexagonHalf;
