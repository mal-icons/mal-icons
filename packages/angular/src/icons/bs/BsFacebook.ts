import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-bs-facebook",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class BsFacebook {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M16 8.05c0-4.45-3.58-8.05-8-8.05C3.58 00 3.60 8.05c0 4.02 2.93 7.35 6.75 7.95v-5.62h-2.03V8.05H6.75V6.28c0-2.02 1.2-3.13 3.02-3.130.88 0 1.790.16 1.790.16v1.98h-1.01c-0.99 0-1.30.62-1.3 1.26v1.51h2.22l-0.35 2.33H9.25V16c3.82-0.6 6.75-3.93 6.75-7.95"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default BsFacebook;
