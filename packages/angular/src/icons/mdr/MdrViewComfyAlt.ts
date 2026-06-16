import { ChangeDetectionStrategy, Component, Input } from "@angular/core";
import type { NodeTuple } from "@mal-icons/core";
import { IconBaseComponent } from "../../icon-base.ts";

@Component({
  selector: "mal-mdr-view-comfy-alt",
  standalone: true,
  imports: [IconBaseComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<mal-icons [viewBox]="viewBox" [nodes]="nodes" [defaultAttr]="defaultAttr" [size]="size" [color]="color" [title]="title" [className]="className"></mal-icons>`,
})
class MdrViewComfyAlt {
  readonly viewBox = "0 0 24 24";
  readonly nodes: NodeTuple[] = [["path",{"d":"M20 4H4c-1.1 0-2 0.9-2 2v12c0 1.10.9 2 2 2h16c1.1 0 2-0.9 2-2V6c0-1.1-0.9-2-2-2zm-9.5 13h-3c-0.28 0-0.5-0.22-0.5-0.5v-3c0-0.280.22-0.50.5-0.5h3c0.28 0 0.50.220.50.5v3c0 0.28-0.220.5-0.50.5zm0-6h-3c-0.28 0-0.5-0.22-0.5-0.5v-3c0-0.280.22-0.50.5-0.5h3c0.28 0 0.50.220.50.5v3c0 0.28-0.220.5-0.50.5zm6 6h-3c-0.28 0-0.5-0.22-0.5-0.5v-3c0-0.280.22-0.50.5-0.5h3c0.28 0 0.50.220.50.5v3c0 0.28-0.220.5-0.50.5zm0-6h-3c-0.28 0-0.5-0.22-0.5-0.5v-3c0-0.280.22-0.50.5-0.5h3c0.28 0 0.50.220.50.5v3c0 0.28-0.220.5-0.50.5z"}]];
  @Input() size?: string | number;
  @Input() color?: string;
  @Input() title?: string;
  @Input() className?: string;
}

export default MdrViewComfyAlt;
