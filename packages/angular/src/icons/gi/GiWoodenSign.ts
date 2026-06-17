import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gi-wooden-sign",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GiWoodenSign {
  readonly viewBox = "0 0 512 512";
  readonly nodes: NodeTuple[] = [["path",{"fill":"currentColor","d":"M240.03 35.94c-1.080.01-2.170.06-3.250.12-8.640.5-17.16 2.8-22.5 5.97-5.34 3.17-7.02 5.72-6.81 9.59v0.25l0.78 28.16 59.97-1.28-0.88-31.84c-0.15-3.01-1.81-5.15-7.47-7.59C255.63 37.48 249.63 36.27 243.25 36c-1.06-0.04-2.14-0.07-3.22-0.06zm224.94 57.22L33.59 102.53l1.38 62 154.66 4.06-148.16 9.72-2.91 98.81 1.410.31 8.06 1.84-0.84 8.22-6.91 67.47 429.53-9.28L464.22 283l-140.38-3.66 139.22-9.16-8.88-99.41-138.87-3.62 151.03-9.94-1.37-64.06zM276.31 368.56l-59.87 1.28L220 495.78h59.84l-3.53-127.22z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GiWoodenSign;
