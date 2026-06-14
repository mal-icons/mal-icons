import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-oc-repo-delete-24",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class OcRepoDelete24 {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M5.75 0A2.75 2.75 0 0 0 3 2.75v16.5A2.75 2.75 0 0 0 5.75 22h8a0.750.75 0 0 0 0-1.5h-8c-0.69 0-1.25-0.56-1.25-1.25V18A1.5 1.5 0 0 1 6 16.5h7.75a0.750.75 0 0 0 0-1.5H6c-0.55 0-1.060.15-1.50.4V2.75c0-0.690.56-1.25 1.25-1.25H19.5v12.25a0.750.75 0 0 0 1.5 0v-13a0.750.75 0 0 0-0.75-0.75H5.75Z"}],["path",{"d":"M16.22 16.22a0.750.75 0 0 1 1.06 0L20 18.94l2.72-2.72a0.750.75 0 1 1 1.06 1.06L21.06 20l2.72 2.72a0.750.75 0 1 1-1.06 1.06L20 21.06l-2.72 2.72a0.750.75 0 1 1-1.06-1.06L18.94 20l-2.72-2.72a0.750.75 0 0 1 0-1.06Z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default OcRepoDelete24;
