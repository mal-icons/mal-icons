import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-gr-venmo",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class GrVenmo {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["g",{"clip-path":"url(#a)"}],["path",{"fill":"currentColor","fill-rule":"evenodd","d":"M24 12c0 6.63-5.37 12-12 12-6.63 0-12-5.37-12-12C0 5.37 5.37 0 12 0c6.63 0 12 5.37 12 12Zm-5.98-3.57c0-1-0.21-1.79-0.68-2.56l-4.030.81c0.260.540.42 1.190.42 2.14 0 1.74-1.24 4.3-2.24 5.93L10.41 6.15l-4.430.42 2.03 12.09h5.06c2.22-2.91 4.95-7.05 4.95-10.23Z","clip-rule":"evenodd"}],["path",{"fill":"currentColor","d":"M0 0h24v24H0z"}]];
  readonly defaultAttr = {"fill":"none"};
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default GrVenmo;
