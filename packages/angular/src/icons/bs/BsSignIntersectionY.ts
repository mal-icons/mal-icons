import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-sign-intersection-y",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsSignIntersectionY {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M10.49 5.2 8 7.48 5.51 5.2 4.49 6.3 7.25 8.83V12h1.5V8.83l2.76-2.53z"}],["path",{"d":"M9.050.44c-0.58-0.58-1.52-0.58-2.1 0L0.44 6.95c-0.580.58-0.58 1.52 0 2.1l6.52 6.52c0.580.58 1.520.58 2.1 0l6.52-6.52c0.58-0.580.58-1.52 0-2.1zm-1.40.7a0.50.5 0 0 1 0.7 0l6.52 6.52a0.50.5 0 0 1 0 0.7L8.35 14.87a0.50.5 0 0 1-0.7 0L1.13 8.35a0.50.5 0 0 1 0-0.7L7.65 1.13Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsSignIntersectionY;
