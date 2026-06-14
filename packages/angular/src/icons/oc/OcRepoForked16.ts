import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-repo-forked-16",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcRepoForked16 {
  readonly viewBox = "0 0 16 16";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5 5.37v0.88c0 0.410.340.750.750.75h4.5a0.750.75 0 0 0 0.75-0.75v-0.88a2.25 2.25 0 1 1 1.5 0v0.88a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.13a2.25 2.25 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-0.88a2.25 2.25 0 1 1 1.5 0ZM5 3.25a0.750.75 0 1 0-1.5 0 0.750.75 0 0 0 1.5 0Zm6.750.75a0.750.75 0 1 0 0-1.50.750.75 0 0 0 0 1.5Zm-3 8.75a0.750.75 0 1 0-1.5 0 0.750.75 0 0 0 1.5 0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcRepoForked16;
