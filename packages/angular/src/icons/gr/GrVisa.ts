import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-visa",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrVisa {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","fill-rule":"evenodd","d":"M5.76,6.34 C4.34,5.56 2.73,4.93 0.93,4.49 L0.99,4.14 L8.4,4.14 C9.39,4.18 10.2,4.5 10.48,5.57 L12.09,13.31 C12.09,13.31 12.09,13.31 12.09,13.31 L12.57,15.65 L17.07,4.15 L21.93,4.15 L14.7,20.97 L9.84,20.98 L5.76,6.34 L5.76,6.34 Z"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrVisa;
