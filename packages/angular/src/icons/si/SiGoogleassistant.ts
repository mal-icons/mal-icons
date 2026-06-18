import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-si-googleassistant",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class SiGoogleassistant {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M22.37 8.73c0.9 0 1.64-0.73 1.64-1.63s-0.73-1.64-1.63-1.64-1.640.74-1.64 1.640.72 1.64 1.64 1.64m-4.91 5.45a3.27 3.27 0 1 0 0-6.54 3.27 3.27 0 0 0 0 6.54m0 8.72c2.11 0 3.82-1.71 3.82-3.83s-1.71-3.82-3.83-3.82a3.82 3.82 0 0 0-3.82 3.82 3.83 3.83 0 0 0 3.83 3.83M6.54 14.18a6.54 6.54 0 1 0 0-13.08 6.54 6.54 0 1 0 0 13.08"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default SiGoogleassistant;
