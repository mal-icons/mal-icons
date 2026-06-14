import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-tasklist-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcTasklist24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M3 6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm1.5 4.5h4v-4h-4Zm8.25-5a0.750.75 0 0 0 0 1.5h7.5a0.750.75 0 0 0 0-1.5h-7.5Zm0 6a0.750.75 0 0 0 0 1.5h7.5a0.750.75 0 0 0 0-1.5h-7.5Zm0 6a0.750.75 0 0 0 0 1.5h7.5a0.750.75 0 0 0 0-1.5h-7.5Zm-2.97-2.53a0.750.75 0 0 1 0 1.06l-3.5 3.5a0.750.75 0 0 1-1.06 0l-2-2a0.750.75 0 1 1 1.06-1.06l1.47 1.47 2.97-2.97a0.750.75 0 0 1 1.06 0Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcTasklist24;
