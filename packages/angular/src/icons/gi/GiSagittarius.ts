import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-sagittarius",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiSagittarius {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M267.93 459.63l-80.01-80.08-100.31 100.12-57.52-57.52 100.25-100.25c-60.47-60.56-77.15-77.33-79.83-80.08l57.52-57.52 79.95 79.95 128.03-128.03C178.14 101.76 209.1 109.4 204.28 108.13L223.96 29.2l203.81 50.81L477.8 283.64l-79.19 19.75-26.76-107.59-126.21 126.11 80.02 80.02-57.72 57.72z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiSagittarius;
