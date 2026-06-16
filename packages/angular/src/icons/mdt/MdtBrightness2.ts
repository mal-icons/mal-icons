import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdt-brightness-2",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdtBrightness2 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M18 12c0-4.41-3.59-8-8-8-0.34 0-0.680.02-1.010.07C10.9 6.23 12 9.05 12 12c0 2.95-1.1 5.77-3.01 7.930.330.050.670.07 1.010.07 4.41 0 8-3.59 8-8z","opacity":".3"}],["path",{"d":"M5 20.65C6.47 21.5 8.18 22 10 22c5.52 0 10-4.48 10-10S15.52 2 10 2c-1.82 0-3.530.5-5 1.35C7.99 5.08 10 8.3 10 12s-2.01 6.92-5 8.65zM12 12c0-2.95-1.1-5.77-3.01-7.93C9.32 4.02 9.66 4 10 4c4.41 0 8 3.59 8 8s-3.59 8-8 8c-0.34 0-0.68-0.02-1.01-0.07C10.9 17.77 12 14.95 12 12z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdtBrightness2;
