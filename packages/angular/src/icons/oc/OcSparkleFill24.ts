import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-sparkle-fill-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcSparkleFill24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M11.3 1.92c0.24-0.66 1.17-0.66 1.41 0l0.72 1.96a11.25 11.25 0 0 0 6.7 6.7l1.960.72c0.660.240.66 1.17 0 1.41l-1.960.72a11.25 11.25 0 0 0-6.7 6.7l-0.72 1.96c-0.240.66-1.170.66-1.41 0l-0.72-1.96a11.25 11.25 0 0 0-6.7-6.7l-1.96-0.72c-0.66-0.24-0.66-1.17 0-1.41l1.96-0.72a11.25 11.25 0 0 0 6.7-6.7l0.72-1.96Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcSparkleFill24;
