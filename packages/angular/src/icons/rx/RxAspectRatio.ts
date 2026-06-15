import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-rx-aspect-ratio",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class RxAspectRatio {
  readonly viewBox = "0 0 15 15";
  readonly nodes: NodeTuple[] = [["path",{"fill-rule":"evenodd","clip-rule":"evenodd","d":"M2.5 2H12.5C12.78 2 13 2.22 13 2.5V12.5C13 12.78 12.78 13 12.5 13H2.5C2.22 13 2 12.78 2 12.5V2.5C2 2.22 2.22 2 2.5 2ZM1 2.5C1 1.67 1.67 1 2.5 1H12.5C13.33 1 14 1.67 14 2.5V12.5C14 13.33 13.33 14 12.5 14H2.5C1.67 14 1 13.33 1 12.5V2.5ZM7.5 4C7.78 4 8 3.78 8 3.5C8 3.22 7.78 3 7.5 3C7.22 3 7 3.22 7 3.5C7 3.78 7.22 4 7.5 4ZM8 5.5C8 5.78 7.78 6 7.5 6C7.22 6 7 5.78 7 5.5C7 5.22 7.22 5 7.5 5C7.78 5 8 5.22 8 5.5ZM7.5 8C7.78 8 8 7.78 8 7.5C8 7.22 7.78 7 7.5 7C7.22 7 7 7.22 7 7.5C7 7.78 7.22 8 7.5 8ZM10 7.5C10 7.78 9.78 8 9.5 8C9.22 8 9 7.78 9 7.5C9 7.22 9.22 7 9.5 7C9.78 7 10 7.22 10 7.5ZM11.5 8C11.78 8 12 7.78 12 7.5C12 7.22 11.78 7 11.5 7C11.22 7 11 7.22 11 7.5C11 7.78 11.22 8 11.5 8Z","fill":"currentColor"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default RxAspectRatio;
