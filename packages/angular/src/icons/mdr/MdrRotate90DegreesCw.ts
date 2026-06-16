import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-rotate-90-degrees-cw",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrRotate90DegreesCw {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3.86 18.46c2.65 3.45 7.11 4.37 10.74 2.790.61-0.270.74-1.090.27-1.56l-0.05-0.05c-0.29-0.29-0.72-0.35-1.1-0.19-2.96 1.24-6.590.37-8.58-2.62-1.58-2.37-1.55-5.370.05-7.73C6.6 7.03 8.8 6.03 11 6.03v1.76c0 0.450.540.670.860.36l2.79-2.79c0.2-0.20.2-0.51 0-0.71l-2.8-2.79a0.50.5 0 0 0-0.850.35v1.8c-2.76 0-5.52 1.25-7.34 3.78-2.28 3.17-2.2 7.580.2 10.67z"}],["path",{"d":"M17.7 7.71a11 0 0 0-1.41 0l-4.59 4.58a11 0 0 0 0 1.41l4.59 4.59c0.390.39 1.020.39 1.41 0l4.59-4.59a11 0 0 0 0-1.41L17.7 7.71z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrRotate90DegreesCw;
